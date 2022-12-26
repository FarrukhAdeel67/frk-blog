const { Router } = require("express");
const router = Router();

// Routers
const userRouter = require("./user");
const blogRouter = require("./blog");

router.use("/users", userRouter);
router.use("/blogs", blogRouter);

module.exports = router;