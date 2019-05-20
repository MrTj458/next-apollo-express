import React from 'react'
import App, { Container } from 'next/app'
import ApolloClient from 'apollo-boost'
import fetch from 'node-fetch'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  fetch,
})

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <ApolloProvider client={client}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ApolloProvider>
    )
  }
}

export default MyApp
