const { Router } = require("express")
const { GET, POST, PUT, DELETE } = require('../controllers/auhtor.contr.js');

const authorRouter = Router();

authorRouter
    .get("/author", GET)
    .get("/author/:id", GET)
    .post("/author", POST)
    .put("/author/:id", PUT)
    .delete("/author/:id", DELETE)

module.exports = { authorRouter }
