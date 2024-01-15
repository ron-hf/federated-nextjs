import { Box, createTheme, ThemeOptions, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import Sidebar from '../components/MainLayout/Sidebar';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, split } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'

//import App from 'next/app';
import {theme} from '../themes';
//import { theme } from 'provider_app/theme'

const hfTheme = dynamic(async () => await import('hfDemo/theme'), {
  ssr: false
}) as ThemeOptions

const Header = dynamic(() => import('hfDemo/Header'), {
  ssr: false
})
 
export default function App({ Component, pageProps }: AppProps) {


  const router = useRouter();

  const wsLink = new GraphQLWsLink(createClient({
    url: 'ws://localhost:8082/subscriptions',
  }))

  const httpLink = new HttpLink({
    uri: 'http://localhost:8082/graphql'
  })

  const splitLink = split(
    ({query}) => {
      const definition = getMainDefinition(query)
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    },
    wsLink,
    httpLink
  )
  const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache()
  })

  useEffect(() => {
    if (!window) return

    const path = window.location
    if (path?.pathname === '' || path?.pathname === '/')
      router.push('/Host')
  }, [router]);
  
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <ApolloProvider client = {client}>
        <Box>
          <Header />
          <Sidebar />
          <Component {...pageProps} />
        </Box>
      </ApolloProvider>
    </ThemeProvider>
  )
}

/*MyApp.getInitialProps = async (ctx: any) => {
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};*/