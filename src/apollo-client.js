import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const client = new ApolloClient({
    uri: 'https://api.hospitality.shaastra.org',
    cache: new InMemoryCache()
});

export default client;