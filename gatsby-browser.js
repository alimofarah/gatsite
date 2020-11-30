import './src/style/tailwind.css'

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import fetch from "isomorphic-fetch";
import ApolloClient from 'apollo-boost';


export const wrapRootElement = ({ element }) => {
  const client = new ApolloClient({
    fetch,
    uri: `http://gatsite.local/graphql`,
  })


 return( <ApolloProvider client={client}>{element}</ApolloProvider>)
};