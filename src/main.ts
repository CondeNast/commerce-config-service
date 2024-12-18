import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigurationService } from './configuration/configuration.service';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('API Backend Commerce Config Service')
    .setDescription('The API Commerce Config Service backend')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({ credentials: true, origin: true });
  const appConfig: ConfigurationService = app.get(ConfigurationService);
  await app.listen(appConfig.port);
  Logger.log(`Server started on host: localhost ; port: ${appConfig.port};`);
}
bootstrap();
