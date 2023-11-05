const { bookAuthor } = require("../schemas/book_auhtor.schema.js")


module.exports = {
    GET: async (req, res) => {
        try {
            const id = req.params?.id;
            let data;
            if (id) {
                data = await bookAuthor.findById(id);

            } else data = await bookAuthor.find().populate('book_ref_id').populate('author_ref_id')

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
            const { author_ref_id , book_ref_id } = req.body

            return res.send({
                status: 201,
                data: await bookAuthor.create({ author_ref_id , book_ref_id}),
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
            const { author_ref_id , book_ref_id} = req.body

            return res.send({
                status: 201,
                data: await bookAuthor.findByIdAndUpdate(id, {
                    $set: {
                        author_ref_id , book_ref_id
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
                data: await bookAuthor.findByIdAndDelete(id),
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





