const { Router } = require("express")
const { GET, POST} = require('../controllers/category.contr.js');

const categoryRouter = Router();

categoryRouter
    .get("/category", GET)
    .get("/category/:id", GET)
    .post("/category", POST)


module.exports = { categoryRouter }
