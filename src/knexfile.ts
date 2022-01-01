export default {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.host,
      user: process.env.user,
      database: process.env.database,
      password: process.env.password,
    }
  }
}