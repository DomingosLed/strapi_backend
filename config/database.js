 module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      port: env.int('DATABASE_PORT', 10117),
      ssl: env.bool('DATABASE_SSL', false),
      host: '34.66.185.87',
      database: env('DATABASE_NAME','axciona_strapi'),
      user: env('DATABASE_USER','root'),
      password: env('DATABASE_PASSWORD','Licassss5151'),
      port:  env('DATABASE_PORT','3306'),
    },
  },
}); 

