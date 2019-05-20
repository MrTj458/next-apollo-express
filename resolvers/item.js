const db = require('../db/db')

module.exports = {
  Query: {
    async items() {
      const connection = await db()

      const [rows] = await connection.query('SELECT * FROM item')

      await connection.end()

      return rows
    },
    async item(root, { itemNum }) {
      const connection = await db()

      const [rows] = await connection.query(
        `SELECT * FROM item WHERE item_num = '${itemNum}'`
      )

      await connection.end()

      return rows[0]
    },
  },
}
