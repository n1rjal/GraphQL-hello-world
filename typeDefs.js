const { gql } = require("apollo-server");

exports.typeDefs = gql`
  interface BookInterface {
    title: String
    author: String
    pages: Int
  }

  type Book implements BookInterface {
    _id: ID!
    title: String
    author: String
    pages: Int
  }

  type Query {
    books(title: String): [Book!]!
    getOneBook(id: String): Book
  }

  input BookInfo {
    title: String
    author: String
    pages: Int
  }

  input BookUpdateInfo {
    book_id: String
    bookInfo: BookInfo
  }

  type Mutation {
    addBook(bookInfo: BookInfo!): Book!
    updateBook(bookUpdateInfo: BookUpdateInfo): Book
    deleteBook(id: String): Boolean
  }
`;
