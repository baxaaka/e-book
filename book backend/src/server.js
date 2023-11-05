const express = require("express")
require("./db/mongo.js");
const cors = require("cors")
const ejs = require("ejs")
const path = require('path');

const filUpload = require('express-fileupload')
const { categoryRouter } = require("./routers/category.routes.js")
const { userRouter } = require("./routers/user.routes.js")
const { author_bookRouter } = require("./routers/auhtor_book.routes.js")
const { bookRouter } = require("./routers/book.routes.js")
const { authorRouter } = require("./routers/auhtor.routes.js")



const dotenv = require('dotenv');
dotenv.config(); 
const PORT = process.env.PORT || 3000;

const app = express();

app.engine("html", ejs.renderFile)
app.set("view engine", "html");

app.use(cors())
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(filUpload())

// app.use(express.static(process.cwd() + "/public"));


app.use("/book", express.static(path.join(__dirname, 'uploads')));
app.use("/book", express.static(path.join(__dirname, 'pdf')));


app.use( categoryRouter  ,userRouter ,author_bookRouter,bookRouter ,authorRouter);



app.get("/register", (req, res) => {
    res.render("register")
})


app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})



