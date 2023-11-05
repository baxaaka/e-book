const {model ,Schema ,Types} = require('mongoose');

const userSchema = new Schema({
  username: {
    type:String,

  },
  gmail: {
    type:String,

  },
  password:{ 
    type:String,
  }
 
});

const User = model( 'User', userSchema);

module.exports = { User};