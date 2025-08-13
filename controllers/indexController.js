
const CustomNotFoundError = require("../errors/CustomNotFoundError");
const db = require("../db");

async function getIndexPage(req, res) {
  const books = await db.getAllBooks();
  if (!books) {
    throw new CustomNotFoundError("Books failed to load!");
  }
  res.send(`Index Page: ${JSON.stringify(books)}`);
};

module.exports = { getIndexPage };

