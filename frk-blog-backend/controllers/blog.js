const { Blogs } = require("../models");
module.exports = {
    get: async(req, res) => {
        try {
            const blogs = await Blogs.findAll();
            res.status(200).send(blogs)
        } catch (err) {
            console.log(err);
            res
                .status(err.status || 500)
                .message(err.message || "Something Went Wrong!");
        }
    },
    createBlog: async(req, res) => {
        try {
            const { title, body, author } = req.body;
            if (!title || !body || !author) {
                throw { status: 409, message: "Required Fields cannot be empty" };
            }
            const blog = await Blogs.create({
                title,
                author,
                body,
            })
            res.status(200).send(blog)
        } catch (err) {
            console.log(err);
            res
                .status(err.status || 500)
                .message(err.message || "Something Went Wrong!");
        }
    },
    getBlog: async(req, res) => {
        try {
            const { id } = req.params;
            if (!id) {
                throw { status: 409, message: "Required Fields cannot be empty" };
            }
            const blog = await Blogs.findOne({
                where: {
                    id,
                }
            })
            res.status(200).send(blog)
        } catch (err) {
            console.log(err);
            res
                .status(err.status || 500)
                .message(err.message || "Something Went Wrong!");
        }
    }
}