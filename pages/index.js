import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const CUSTOMERS = gql`
  {
    customers {
      customer_name
    }
  }
`

const Index = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Customers:</h1>

      <Query query={CUSTOMERS}>
        {({ loading, data, err }) => {
          if (loading) return <h1>Loading...</h1>
          if (err) return <h1>Error!</h1>

          return data.customers.map(customer => {
            return (
              <div>
                <h3>{customer.customer_name}</h3>
              </div>
            )
          })
        }}
      </Query>

      <style jsx>
        {`
          h1 {
            color: black;
          }
        `}
      </style>
    </div>
  )
}

export default Index
