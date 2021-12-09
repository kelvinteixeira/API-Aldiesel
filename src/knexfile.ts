import path from 'path'

export default {
  development: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'root',
      database: 'aldisel_db',
      port: 3306
    }
  }
}