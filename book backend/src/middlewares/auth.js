// const jwt = require("jsonwebtoken")
// const { User } = require("../schemas/user.schema.js");

// const isAuth = async (req, res, next) => {
//   try {
//     const { token } = req.headers;
    
//     let tokenData = jwt.verify(token, process.env.Secret_Key);

//     const uId = tokenData.userTok

//     const findToken = await User.findById(uId)

//     if (!findToken) throw new Error("Not found");

//     next();
//   } catch (error) {
//     res.send({
//       status: 401,
//       message: error.message,
//     });
//   }
// };
// module.exports = { isAuth };
