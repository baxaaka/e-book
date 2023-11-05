const { Category } = require("../schemas/category.schema.js")

module.exports = {
    GET: async (req, res) => {
        try {
            const id = req.params?.id;
            let data;

            if (id) {
                data = await Category.findById(id);
            } else data = await Category.find()

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
            const { cat_name} = req.body

            console.log(cat_name);

            return res.send({
                status: 201,
                data: await Category.create({ cat_name}),
                message: 'created'
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





