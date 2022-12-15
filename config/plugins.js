module.exports = {
    upload: {
        config: {
          provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
          providerOptions: {
              bucketName: 'staging.avid-infinity-370500.appspot.com',
              publicFiles: true,
              uniform: false,
              basePath: '',
              baseUrl: 'https://storage.googleapis.com/staging.avid-infinity-370500.appspot.com'
          },
        },
      },
   
}


// https://avid-infinity-370500.appspot.com/uploads/thumbnail_undraw_content_team_caeb38b8de.png?width=1119&height=712
// https://storage.googleapis.com/staging.avid-infinity-370500.appspot.com/90ce05fb673ca89f100240c87d50a7e0cf795f5d   OK