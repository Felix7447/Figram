import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, ApolloLink, concat } from '@apollo/client';
import { endpoints } from './config/config';
import './styles/globals.scss'
import Context from './context/context';

const httpLink = new HttpLink({
  uri: endpoints.apiGql
})

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem("token")
  const authorization = token ? `Bearer ${token}` : ''

  operation.setContext(( { headers = {} } ) => ({
    headers: {
      ...headers,
      authorization
    }
  }))

  return forward(operation)
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink)
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context.Provider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
  </Context.Provider>
)
