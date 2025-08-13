const { Router } = require("express");
const { getBookById, getAllBooks } = require('../controllers/bookController');

const bookRouter = Router();

bookRouter.get("/", getAllBooks);
bookRouter.get("/:bookId", getBookById);

module.exports = bookRouter;