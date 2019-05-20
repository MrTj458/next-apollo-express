const express = require('express')
const next = require('next')
const { ApolloServer } = require('apollo-server-express')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

nextApp
  .prepare()
  .then(() => {
    const app = express()

    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
      playground: dev,
    })

    apolloServer.applyMiddleware({ app, path: '/api/graphql' })

    app.get('*', (req, res) => {
      return handle(req, res)
    })

    app.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
