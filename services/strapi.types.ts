// Media formats (thumbnail, large, medium, small, etc.)
export type MediaFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
};

// Generic Strapi Media object
export type Media = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: {
    thumbnail?: MediaFormat;
    large?: MediaFormat;
    medium?: MediaFormat;
    small?: MediaFormat;
  } | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null;
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
  publishedAt: string; // ISO date
};

// Feature item
export type KeyFeature = {
  id: number;
  feature: string;
};

// Technology relation
export type Technology = {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

// Project entity
export type Project = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  price: number;
  link: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover_photo: Media;
  key_features: KeyFeature[];
  pdf: Media;
  technologies: Technology[];
};

// Pagination type
export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

// Full API response type
export type WithPagination<T> = {
  data: T[];
  meta: {
    pagination: Pagination;
  };
};