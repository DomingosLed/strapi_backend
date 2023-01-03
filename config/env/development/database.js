 module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      ssl: env.bool('DATABASE_SSL', false),
      host: env('DATABASE_HOST'),
      //socketPath: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`,
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USER'),
      password: env('DATABASE_PASSWORD'),
      port:  env('DATABASE_PORT','3306'),
    },
  },
}); 

