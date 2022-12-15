module.exports = [
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      ContentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'img-src': ["'self'", 'data:', 'blob:','https://storage.googleapis.com/staging.avid-infinity-370500.appspot.com'],
          'media-src': ["'self'", 'data:', 'blob:','https://storage.googleapis.com/staging.avid-infinity-370500.appspot.com'],
        }
      },
    },
  },

  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];



