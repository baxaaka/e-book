const mongoose = require('mongoose');

mongoose
    .connect("mongodb://127.0.0.1:27017/books")
    .then(console.log("connection"))
    .catch((er) => console.log(er.message));
