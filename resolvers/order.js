const db = require('../db/db')

module.exports = {
  Query: {
    async orders() {
      const connection = await db()

      const [rows] = await connection.query('SELECT * FROM orders')

      await connection.end()

      return rows
    },
    async order(root, { orderNum }) {
      const connection = await db()

      const [rows] = await connection.query(
        `SELECT * FROM orders WHERE order_num = ${orderNum}`
      )

      await connection.end()

      return rows[0]
    },
  },
  Order: {
    async customer(order) {
      const connection = await db()

      const [rows] = await connection.query(
        `SELECT * FROM customer WHERE customer_num = '${order.customer_num}'`
      )

      await connection.end()

      return rows[0]
    },
    async orderLines(order) {
      const connection = await db()

      const [rows] = await connection.query(
        `Select * FROM order_line WHERE order_num = '${order.order_num}'`
      )

      await connection.end()

      return rows
    },
  },
}
