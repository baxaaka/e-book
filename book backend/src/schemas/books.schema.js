const { model, Schema, Types } = require('mongoose');

const bookSchema = new Schema({

    cat_ref_id: {
        type: Types.ObjectId,
        ref: 'Category',
        key: '_id',
        required: true
    },

    title: {
        type: String, 
        required: true,  
    },
    year: {
        type: Number,
 
    },
    page: {
        type: Number,
      
        
    },
    about_book: {
        type: String,
    },
    book_img:{
        type: String,

    },
    book_file:{
        type: String,

    },
    delete_at: {
        type: Date,
        default: null
    },

});

const Book = model('Book', bookSchema);

module.exports = { Book };