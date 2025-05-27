module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_CLOUD_NAME'),
                api_key: env('CLOUDINARY_API_KEY'),
                api_secret: env('CLOUDINARY_API_SECRET'),
            },
            actionOptions: {
                upload: {},
                delete: {},
            },
        },
    },

    documentation: {
        enabled: true,
        config: {
            openapi: '3.0.0',
            info: {
                title: 'My Strapi API',
                description: 'API documentation for my Strapi application',
                version: '1.0.0',
            },
            'x-strapi-config': {
                plugins: ['users-permissions', 'upload'], // Include plugins to document
                path: '/documentation', // Custom path for Swagger UI
                showGeneratedFiles: true, // Show generated OpenAPI files in admin panel
            },
        },
    },
});
