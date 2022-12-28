const { Router } = require("express");
const router = Router();
const controller = require("../controllers/blog")
router.get('/', controller.get);
router.get("/:id", controller.getBlog);
router.post('/createBlog', controller.createBlog);
module.exports = router;