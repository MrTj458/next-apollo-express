const db = require('../db/db')

module.exports = {
  Query: {
    async reps() {
      const connection = await db()

      const [rows] = await connection.query('SELECT * FROM rep')

      await connection.end()

      return rows
    },
    async rep(root, { repNum }) {
      const connection = await db()

      const [rows] = await connection.query(
        `SELECT * FROM rep WHERE rep_num = ${repNum}`
      )

      await connection.end()

      return rows[0]
    },
  },
  Rep: {
    async customers(rep) {
      const connection = await db()

      const [rows] = await connection.query(
        `SELECT * FROM customer WHERE rep_num = ${rep.rep_num}`
      )

      await connection.end()

      return rows
    },
  },
}
