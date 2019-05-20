const { gql } = require('apollo-server-express')

module.exports = gql`
  extend type Query {
    orders: [Order!]!
    order(orderNum: String): Order
  }

  type Order {
    order_num: String
    order_date: String
    customer_num: String
    customer: Customer
    orderLines: [OrderLine!]!
  }
`
