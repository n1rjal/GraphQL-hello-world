const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    title: String
    author: String
    pages: Int
  }

  type Query {
    books: [Book!]!
  }
`;

const books = [
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

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log("Listening to port " + url);
});
