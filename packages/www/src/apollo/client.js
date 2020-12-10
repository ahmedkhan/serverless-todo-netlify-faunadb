import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from 'apollo-link-context';
import netlifyIdentity from 'netlify-identity-widget';

const httpLink = new HttpLink({
  uri: "https://serverless-todo-netlify-faunadb.netlify.app/.netlify/functions/graphql",
  fetch,
})

const authLink = setContext((_, { headers }) => {

  netlifyIdentity.init({})

  const user = netlifyIdentity.currentUser()
  console.log(user)
  let token = null;
  if (!!user ){
    token = user.token.access_token
  }
  
  

  console.log(token)
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

