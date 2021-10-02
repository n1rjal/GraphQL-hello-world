exports.resolvers = {
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
