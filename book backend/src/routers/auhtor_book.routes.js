const { Router } = require("express")
const { GET, POST, PUT, DELETE } = require('../controllers/book_author.contr.js');

const author_bookRouter = Router();

author_bookRouter
    .get("/authorbook", GET)
    .get("/authorbook/:id", GET)
    .post("/authorbook", POST)
    .put("/authorbook/:id", PUT)
    .delete("/authorbook/:id", DELETE)

module.exports = { author_bookRouter }