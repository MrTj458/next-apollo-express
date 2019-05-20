const db = require('../db/db')

module.exports = {
  Query: {
    async orderLines() {
      const connection = await db()

      const [rows] = await connection.query('SELECT * FROM order_line')

      await connection.end()

      return rows
    },
    async orderLine(root, { orderNum, itemNum }) {
      const connection = await db()

      const [rows] = await connection.query(
        `SELECT * FROM order_line WHERE order_num = '${orderNum}' AND item_num = '${itemNum}'`
      )

      await connection.end()

      return rows[0]
    },
  },
  OrderLine: {
    async order(orderLine) {
      const connection = await db()

      const [rows] = await connection.query(
        `SELECT * FROM orders WHERE order_num = '${orderLine.order_num}'`
      )

      await connection.end()

      return rows[0]
    },
    async item(orderLine) {
      const connection = await db()

      const [rows] = await connection.query(
        `SELECT * FROM item WHERE item_num = '${orderLine.item_num}'`
      )

      await connection.end()

      return rows[0]
    },
  },
}
