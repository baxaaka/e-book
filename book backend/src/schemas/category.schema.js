const { model, Schema, Types } = require('mongoose');

const categorySchema = new Schema({

    cat_name: {
        type: String,

    },

});

const Category = model('Category', categorySchema);

module.exports = { Category };