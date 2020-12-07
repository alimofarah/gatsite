
export {wrapRootElement} from './gatsby-browser';


/*

import React from 'react'
import { ApolloProvider } from 'react-apollo'
//import { ApolloProvider } from '@apollo/client';
import ApolloClient from 'apollo-boost'
import fetch from "isomorphic-fetch";
//import {InMemoryCache} from "apollo-cache-inmemory"
import {  InMemoryCache, HttpLink } from '@apollo/client';
//import ContactForm from "./src/pages/ContactForm"

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://gatsite.local/graphql',
    fetch,
  }),
  cache: new InMemoryCache(),
})

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{ element }</ApolloProvider>
)













/*
{
    typePolicies: {
      createSubmission: {
        fields: {
          data: {
            merge(existing, incoming, { mergeObjects }) {
              // Correct, thanks to invoking nested merge functions.
              return mergeObjects(existing, incoming);
            },
          },
        },
      },
    },
  }

/*







/*

import { ApolloProvider } from '@apollo/client';
import ContactForm from "./src/pages/ContactForm"

const client = new ApolloClient({
  
  uri: "http://gatsite.local/graphql",


  
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ContactForm />
  </ApolloProvider>,
  document.getElementById('root'),
);


*/











/*


/*
import React from "react"
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