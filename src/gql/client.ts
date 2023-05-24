import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://arweave-search.goldsky.com/graphql',
  cache: new InMemoryCache(),
});

export default client;