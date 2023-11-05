const { User } = require("../schemas/users.chema.js")

module.exports = {

    GET: async (req, res) => {
        try {
            const id = req.params?.id;
            let data;

            if (id) {
                data = await User.findById(id);
            } else data = await User.find()

            return res.send({
                status: 200,
                data,
                message: "message"
            });

        } catch (error) {
            return res.status(501).json({
                status: 501,
                data: null,
                message: error.message,
            });
        }
    },

    POST: async (req, res) => {
        try {
            const { username, gmail, password } = req.body

            console.log(username, gmail, password);

            return res.send({
                status: 201,
                data: await User.create({ username, gmail, password }),
                message: 'created'
            })
        } catch (error) {
            return res.status(501).json({
                status: 501,
                data: null,
                message: error.message,
            });
        }

    },

    PUT: async (req, res) => {
        try {
            const id = req.params?.id;
            const { username, gmail, password } = req.body

            return res.send({
                status: 201,
                data: await User.findByIdAndUpdate(id, {
                    $set: {
                        username,
                        gmail,
                        password
                    }
                }),
                message: 'updated'
            })
        } catch (error) {
            return res.status(501).json({
                status: 501,
                data: null,
                message: error.message,
            });
        }

    },

    DELETE: async (req, res) => {
        try {
            const id = req.params?.id;

            return res.send({
                status: 201,
                data: await User.findByIdAndUpdate(id),
                message: 'deleted'
            })
        } catch (error) {
            return res.status(501).json({
                status: 501,
                data: null,
                message: error.message,
            });
        }

    }
}





