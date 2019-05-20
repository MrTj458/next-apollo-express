const { gql } = require('apollo-server-express')

module.exports = gql`
  extend type Query {
    items: [Item!]!
    item(itemNum: String!): Item
  }

  type Item {
    item_num: String
    description: String
    on_hand: Float
    category: String
    storehouse: String
    price: Float
  }
`
