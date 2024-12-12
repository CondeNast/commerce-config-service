export interface FeatureFlagResponse {
  data: FeatureFlag[];
}

export interface FeatureFlag {
  type: string; // e.g., "feature-flags"
  id: string; // e.g., "5859b4507bb5d280c51bf4e7"
  links: Links;
  attributes: FeatureFlagAttributes;
}

export interface Links {
  self: string; // e.g., "/api/feature-flags/5859b4507bb5d280c51bf4e7"
}

export interface FeatureFlagAttributes {
  name: string; // e.g., "clipsLede"
  brands: Brands;
  'created-at': string; // ISO 8601 Date string, e.g., "2016-12-20T22:44:32.326Z"
}

export interface Brands {
  [brand: string]: boolean; // e.g., { "acme": false, "ad": true, "all": true }
}
