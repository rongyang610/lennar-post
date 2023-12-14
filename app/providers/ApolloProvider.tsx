'use client'
import { ApolloProvider } from '@apollo/client'

import createApolloClient from '@/lib/apolloClient'

const client = createApolloClient()

const Apollo = ({ children }: { children: React.ReactNode }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)

export default Apollo
