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
      depthLimit: 50,
      amountLimit: 1000,
      apolloServer: {
        tracing: false,
      },
    },
  },
}

