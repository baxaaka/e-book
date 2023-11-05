const {model ,Schema ,Types} = require('mongoose');

const book_authorShema = new Schema({

  author_ref_id: {
    type: Types.ObjectId,
    ref:'Author',
    key:'_id',
    // required: true
  },
  book_ref_id: {        
    type: Types.ObjectId,
    ref:'Book',
    key:'_id',
    // required: true
  },

});

const bookAuthor = model('bookAuthor', book_authorShema);

module.exports = {bookAuthor};