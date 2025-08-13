// db.js

const authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];

const books = [
  { id: 1, name: "Book 1" },
  { id: 2, name: "Book 2" },
  { id: 3, name: "Book 3" },
];

async function getAuthorById(authorId) {
  return authors.find(author => author.id === authorId);
};

async function getBookById(bookId) {
  return books.find(book => book.id === bookId);
};

async function getAllBooks() {
  return books;
};

module.exports = { getAuthorById, getBookById, getAllBooks };
