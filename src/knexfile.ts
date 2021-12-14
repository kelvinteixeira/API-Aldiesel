import path from 'path'

export default {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.host,
      user: process.env.user,
      database: process.env.database,
      password: process.env.password,
      port: 3306,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }, 
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
  }
}