const { Router } = require("express")
const { GET, POST, PUT, DELETE } = require('../controllers/user.contr.js');

const userRouter = Router();

userRouter
    .get("/user", GET)
    .get("/user/:id", GET)
    .post("/user", POST)
    .put("/user/:id", PUT)
    .delete("/user/:id", DELETE)

module.exports = { userRouter }
