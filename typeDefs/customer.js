const { gql } = require('apollo-server-express')

module.exports = gql`
  extend type Query {
    customers: [Customer!]!
    customer(customerNum: String): Customer!
  }

  type Customer {
    customer_num: String
    customer_name: String
    street: String
    city: String
    state: String
    postal_code: String
    balance: Float
    credit_limit: Float
    repNum: String
    rep: Rep
    orders: [Order!]!
  }
`
