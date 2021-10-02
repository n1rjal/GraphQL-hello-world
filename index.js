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

  input BookInfo {
    title: String
    author: String
    pages: Int
  }

  input BookUpdateInfo {
    book_id: Int
    bookInfo: BookInfo
  }

  type Mutation {
    addBook(bookInfo: BookInfo!): Book!
    updateBook(bookUpdateInfo: BookUpdateInfo): Book
    deleteBook(id: Int): Boolean
  }
`;

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

const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    addBook: (parent, { bookInfo }, context) => {
      const { author, title, pages } = bookInfo;
      books.push({ author, title, pages });
      return { author, title, pages };
    },

    updateBook: (parent, { bookUpdateInfo }, context) => {
      const {
        book_id,
        bookInfo: { author, title, pages },
      } = bookUpdateInfo;
      books[book_id] = { author, title, pages };
      return books[book_id];
    },

    deleteBook: (parent, { id }, context) => {
      try {
        if (book[id]) {
          throw "NotFoundError";
        }
        books = books.filter((book, index) => index !== id);
        return true;
      } catch (e) {
        return false;
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res }),
});
server.listen().then(({ url }) => {
  console.log("Listening to port " + url);
});
