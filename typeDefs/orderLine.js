const { gql } = require('apollo-server-express')

module.exports = gql`
  extend type Query {
    orderLines: [OrderLine!]!
    orderLine(orderNum: String, itemNum: String): OrderLine
  }

  type OrderLine {
    order_num: String
    item_num: String
    num_ordered: Float
    quoted_price: Float
    item: Item
    order: Order
  }
`
