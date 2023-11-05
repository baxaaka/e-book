const { Author } = require("../schemas/auhtor.schema")
const path = require("path")

module.exports = {
    GET: async (req, res) => {
        try {
            const id = req.params?.id;
            let data;

            if (id) {
                data = await Author.findById(id);
            } else data = await Author.find()

            
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
            const {username ,age , about_auhtor  } = req.body

            const { sap_ref_id, title, year, page } = req.body


            const author_img = req.files.author_img;


            console.log(sap_ref_id, title, year, page, author_img);

            const uploadPath = path.join(process.cwd(), "src", "uploads", author_img.name);

            await author_img.mv(uploadPath);



            return res.send({
                status: 201,
                data: await Author.create({ username ,age , about_auhtor  ,author_img: author_img.name, }),
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
            const {username ,age , about_auhtor ,author_img } = req.body

            return res.send({
                status: 201,
                data: await Author.findByIdAndUpdate(id, {
                    $set: {
                       username ,age , about_auhtor ,author_img
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
                data: await Author.findByIdAndDelete(id),
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





