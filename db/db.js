const mysql = require('mysql2/promise')

module.exports = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'tj',
    password: '123456',
    database: 'TAL',
  })
  return connection
}
