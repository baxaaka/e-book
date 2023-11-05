// const jwt = require("jsonwebtoken")
// const { Login } = require("../schemas/login.chema.js")

// const isAdmin = async (req, res, next) => {
//     try {
//         const { token } = req.headers;
        
//         let tokenData = jwt.verify(token, process.env.Secret_Key);

//         const uId = tokenData.adminToken

//         const findToken = await Login.findById(uId)

//         if (!findToken) throw new Error("You are not admin");

//         next();
//     } catch (error) {
//         res.send({
//             status: 401,
//             message: error.message,
//         });
//     }
// };
// module.exports = { isAdmin };
