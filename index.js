const { ApolloServer, gql } = require("apollo-server");
const { resolvers } = require("./resolvers");
const { typeDefs } = require("./typeDefs");
const { connect } = require("mongoose");

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res }),
  });
  await connect("mongodb://127.0.0.1:27017/test", {});
  server.listen().then(({ url }) => {
    console.log("Listening to port " + url);
  });
};

startServer();
