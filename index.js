const { ApolloServer, gql } = require("apollo-server");
const { resolvers } = require("./resolvers");
const { typeDefs } = require("./typeDefs");

let books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
    pages: 400,
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
    pages: 404,
  },
];

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res }),
});

server.listen().then(({ url }) => {
  console.log("Listening to port " + url);
});
