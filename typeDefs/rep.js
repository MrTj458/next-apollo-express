const { gql } = require('apollo-server-express')

module.exports = gql`
  extend type Query {
    reps: [Rep!]!
    rep(repNum: String): Rep
  }

  type Rep {
    rep_num: String
    last_name: String
    first_name: String
    street: String
    city: String
    state: String
    postal_code: String
    commision: Float
    rate: Float
    customers: [Customer!]!
  }
`
