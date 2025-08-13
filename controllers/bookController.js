const CustomNotFoundError = require("../errors/CustomNotFoundError");
const db = require("../db");

async function getBookById(req, res) {
  const { bookId } = req.params;

  const book = await db.getBookById(Number(bookId));

  if (!book) {
    throw new CustomNotFoundError("Book not found");
  }

  res.send(`Book Name: ${book.name}`);
};

async function getAllBooks(req, res) {
  const books = await db.getAllBooks();

  if (!books) {
    throw new CustomNotFoundError("Book not found");
  }

  res.send(books);
};

module.exports = { getBookById, getAllBooks };
