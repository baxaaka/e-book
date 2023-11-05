const { Book } = require("../schemas/books.schema.js")

const path = require("path")

module.exports = {
    GET: async (req, res) => {
        try {
            const id = req.params?.id;
            const { search_book } = req.query

            let data;

            if (id) {
                data = await Book.findById(id);
            } else if (search_book) {
                data = await Book.find({ title: { $regex: new RegExp(search_book, 'i') } })
            } else data = await Book.find().populate("cat_ref_id")

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
            const { cat_ref_id, title, year, page ,about_book } = req.body


            const book_img = req.files.book_img;
            const book_file = req.files.book_file;


            console.log(cat_ref_id, title, year, page, book_img ,book_file);

            const uploadPath = path.join(process.cwd(), "src", "uploads", book_img.name);

            const pdfPath = path.join(process.cwd(), "src", "pdf", book_file.name);


            await book_img.mv(uploadPath);
            await book_file.mv(pdfPath);


            return res.send({
                status: 201,
                data: await Book.create({ cat_ref_id, title, year, page,about_book, book_img: book_img.name, book_file: book_file.name }),
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
            const { cat_ref_id, title, year, page ,about_book} = req.body

            return res.send({
                status: 201,
                data: await Book.findByIdAndUpdate(id, {
                    $set: {
                        cat_ref_id, title, year, page,about_book
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
                data: await Book.findByIdAndDelete(id),
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





