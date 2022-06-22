import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o397bb0caw01z2f7m81fbl/master",
  cache: new InMemoryCache(),
});
