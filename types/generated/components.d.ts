import type { Schema, Struct } from '@strapi/strapi';

export interface ImageImage extends Struct.ComponentSchema {
  collectionName: 'components_image_images';
  info: {
    description: '';
    displayName: 'Image';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'image.image': ImageImage;
    }
  }
}
