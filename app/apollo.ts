import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://192.168.33.123:3000/graphql",
  cache: new InMemoryCache(),
});

export default client;
