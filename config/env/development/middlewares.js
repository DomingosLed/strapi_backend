module.exports = [
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      ContentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:','https://storage.googleapis.com/staging.avid-infinity-370500.appspot.com'],
          'media-src': ["'self'", 'data:', 'blob:','https://storage.googleapis.com/staging.avid-infinity-370500.appspot.com'],
          upgradeInsecureRequests: null,
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



