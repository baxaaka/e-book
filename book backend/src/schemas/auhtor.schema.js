const {model ,Schema ,Types} = require('mongoose');

const authorShema = new Schema({

  username: {
    type: String,
    required: true ,
  },

  age: {
    type: Number,
    // required: true,

  },
  about_auhtor:{            
    type: String,
    // required: true,
  },
  author_img:{
   type : String ,
  },

});

const Author = model('Author', authorShema);

module.exports = {Author};