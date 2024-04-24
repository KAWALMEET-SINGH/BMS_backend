import Book from "../models/books.model.js";
import { errorHandler } from "../utils/error.js";

export const createBook = async (req, res, next) => {
  try {
    const { name, author, year } = req.body;
    const userRef = req.user.id;
    const book = await Book.create({ name, author, year, userRef });
    return res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};

export const deleteBook = async (req, res, next) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    return next(errorHandler(404, "Book not found!"));
  }

  if (req.user.id !== book.userRef) {
    return next(errorHandler(401, "You can only delete your own books!"));
  }

  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json("Book has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const updateBook = async (req, res, next) => {
  const book = await Book.findById(req.params.id);
  const userRef = req.user.id;

  if (!book) {
    return next(errorHandler(404, "No book found"));
  }
  if (userRef !== book.userRef) {
    return next(errorHandler(401, "You can only update your own books"));
  }
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedBook);
  } catch (error) {
    next(error);
  }
};
export const getBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return next(errorHandler(404, "No book found"));
    }
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};
export const getBooks = async (req, res, next) => {
  try {
    const { name, author, year } = req.query;

    let query = {};
    if (name) {
      query.name = { $regex: name, $options: "i" };
    }
    if (author) {
      query.author = { $regex: author, $options: "i" };
    }
    if (year) {
      query.year = year.toString();
    }
    const books = await Book.find(query);
    return res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};
