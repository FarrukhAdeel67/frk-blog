const { Router } = require("express");
const router = Router();
const controller = require("../controllers/blog")
router.get('/', controller.get);
router.get("/:id", controller.getBlog);
router.post('/createBlog', controller.createBlog);
router.delete("/deleteBlog/:id", controller.deleteBlog);
module.exports = router;