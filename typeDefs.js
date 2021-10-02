const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Book {
    _id: String
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
    book_id: String
    bookInfo: BookInfo
  }

  type Mutation {
    addBook(bookInfo: BookInfo!): Book!
    updateBook(bookUpdateInfo: BookUpdateInfo): Book
    deleteBook(id: String): Boolean
  }
`;
