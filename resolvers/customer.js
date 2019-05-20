const db = require('../db/db')

module.exports = {
  Query: {
    async customers() {
      const connection = await db()

      const [rows] = await connection.query('SELECT * FROM customer')

      await connection.end()

      return rows
    },
    async customer(root, { customerNum }) {
      const connection = await db()

      const [rows] = await connection.query(
        `SELECT * FROM customer WHERE customer_num = ${customerNum}`
      )

      await connection.end()

      return rows[0]
    },
  },
  Customer: {
    async rep(customer) {
      const connection = await db()

      const [rows] = await connection.query(
        `SELECT * FROM rep where rep_num = ${customer.rep_num}`
      )

      await connection.end()

      return rows[0]
    },
    async orders(customer) {
      const connection = await db()

      const [rows] = await connection.query(
        `SELECT * FROM orders WHERE customer_num = '${customer.customer_num}'`
      )

      await connection.end()

      return rows
    },
  },
}
