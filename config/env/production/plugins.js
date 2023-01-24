module.exports = {
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
    upload: {
        config: {
          provider: 'strapi-provider-upload-google-cloud-storage',
          providerOptions: {
              bucketName: 'staging.avid-infinity-370500.appspot.com',
              publicFiles: false,
              uniform: false,
              basePath: 'https://storage.googleapis.com',
          },
        },
      },

}


// https://avid-infinity-370500.appspot.com/uploads/thumbnail_undraw_content_team_caeb38b8de.png?width=1119&height=712
// https://storage.googleapis.com/staging.avid-infinity-370500.appspot.com/90ce05fb673ca89f100240c87d50a7e0cf795f5d   OK
