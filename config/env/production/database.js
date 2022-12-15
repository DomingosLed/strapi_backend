 module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      ssl: env.bool('DATABASE_SSL', false),
      host: '127.0.0.1',
      //socketPath: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`,
      database: env('DATABASE_NAME','axciona_strapi'),
      user: env('DATABASE_USER','root'),
      password: env('DATABASE_PASSWORD','root'),
      port:  env('DATABASE_PORT','3306'),
    },
  },
}); 

