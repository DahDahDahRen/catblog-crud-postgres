const express = require("express");
const {
  getCatBlogsController,
  getCatBlogController,
  createCatBlogController,
  updateCatBlogController,
  deleteCatBlogController,
} = require("../controller/controller");
const router = express.Router();

// GET
router.get("/", getCatBlogsController);

// GET One Blog
router.get("/:id", getCatBlogController);

// POST Route
router.post("/", createCatBlogController);

// DELETE Route
router.delete("/:id", deleteCatBlogController);

// UPDATE Route
router.patch("/:id", updateCatBlogController);

module.exports = router;
