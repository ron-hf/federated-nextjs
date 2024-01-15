import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache, split } from '@apollo/client'
import { createTheme, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from 'graphql-ws';
import Sidebar from '@app2/app/components/Sidebar';
 
export default function App({ Component, pageProps }: AppProps) {

  const webSocketLink = new GraphQLWsLink(createClient({
      url: 'ws://localhost:8082/subscriptions',
  }));

  const httpLink = createHttpLink({
    uri:'http://localhost:8082/graphql',
  })

  const client = new ApolloClient({
    link: split((operation) => {
      return operation.operationName === "StockWatch"
    }, webSocketLink, httpLink, {mode: 'cors'}),
    cache: new InMemoryCache(),
    headers: {},
    resolvers: {},
  })

  return (
    <ThemeProvider theme={createTheme()}>
      <ApolloProvider client = {client}>
      <Sidebar />
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  )
}