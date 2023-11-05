const { Router } = require("express")
const { GET, POST, PUT, DELETE } = require('../controllers/books.contr.js');

const bookRouter = Router();

bookRouter
    .get("/book", GET)
    .get("/book/:id", GET)
    .post("/book", POST)
    .put("/book/:id", PUT)
    .delete("/book/:id", DELETE)

module.exports = { bookRouter }


