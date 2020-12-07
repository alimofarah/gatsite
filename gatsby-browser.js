import './src/style/tailwind.css'

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import fetch from "isomorphic-fetch";
import ApolloClient from 'apollo-boost';



export const wrapRootElement = ({ element }) => {
  const client = new ApolloClient({
    fetch,
    uri: `https://gatsite.local/graphql`,
  })


 return( <ApolloProvider client={client}>{ element }</ApolloProvider>)
};

















/*
import React from 'react';
import fetch from 'isomorphic-fetch';
import {ApolloClient, ApolloProvider, InMemoryCache,HttpLink} from '@apollo/client';
import ContactForm from "./src/pages/ContactForm.js"
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://gatsite.local/graphql',
})

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ( ) => {
  const client = new ApolloClient({
    fetch,
    link,
    cache
  });
  return <ApolloProvider client={client}><ContactForm /></ApolloProvider>;
};



*/


/*
import {ApolloClient} from 'apollo-client'
import {InMemoryCache} from "apollo-cache-inmemory"
import {HttpLink} from "apollo-link-http"
import { ApolloProvider } from 'react-apollo';

export const wrapRootElement = ({ element }) => {


const cache =new InMemoryCache() ;
const link =new HttpLink({
  uri:"http://gatsite.local/graphql",
})
const client = new ApolloClient({
  cache,link,connectToDevTools:true,
})


return( <ApolloProvider client={client}>{element}</ApolloProvider>)
}

*/
//////
/*







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





*/