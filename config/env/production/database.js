module.exports = ({ env }) => ({
    connection: {
      client: 'mysql',
      connection: {
        //host: env('DATABASE_HOST'),
        socketPath: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`,
        database: env('DATABASE_NAME'),
        user: env('DATABASE_USER'),
        password: env('DATABASE_PASSWORD'),
        port:  env('DATABASE_PORT'),
      },
    },
  });