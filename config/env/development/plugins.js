module.exports = {
   /*  'reviews': {
        enabled: true,
        resolve: './src/plugins/my-plugin' // path to plugin folder
      }, */
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
}

