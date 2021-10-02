const { Book } = require("./models/Book.model");

exports.resolvers = {
  Query: {
    books: async () => {
      return await Book.find();
    },
  },
  Mutation: {
    addBook: async (parent, { bookInfo }, context) => {
      const { author, title, pages } = bookInfo;
      const book = await Book.create({
        pages,
        author,
        title,
      });
      return book;
    },

    updateBook: async (parent, { bookUpdateInfo }, context) => {
      const {
        book_id,
        bookInfo: { author, title, pages },
      } = bookUpdateInfo;
      const book = await Book.findOneAndUpdate(
        { _id: book_id },
        {
          author,
          title,
          pages,
        },
        {
          new: true,
        }
      );
      return book;
    },

    deleteBook: async (parent, { id }, context) => {
      try {
        if (!(await Book.findOne({ _id: id })))
          throw new Error("Book Not found");
        const book = await Book.findOneAndDelete({ _id: id });
        return true;
      } catch (e) {
        return false;
      }
    },
  },
};
