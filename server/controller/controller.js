const pool = require("../db/db");
const createResObj = require("../utils/resBuilder");

// GET Route controller
const getCatBlogsController = async (req, res) => {
  const catBlogs = await pool.query(`
    SELECT * from catblogs
    `);

  res.status(202).json(createResObj(true, 202, catBlogs.rows));
};

// CREATE Route controller
const createCatBlogController = async (req, res) => {
  const { title, body } = req.body;

  const catBlog = await pool.query(
    `
          INSERT INTO catblogs (title, body) VALUES ($1, $2)
              RETURNING *
      `,
    [title, body]
  );

  res.status(202).json(createResObj(true, 202, catBlog.rows));
};

// UPDATE Controller
const updateCatBlogController = async (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;

  const catBlog = await pool.query(
    `
        UPDATE catblogs SET
            title = $1,
            body = $2
        WHERE id = $3 RETURNING *
    `,
    [title, body, id]
  );

  res.status(202).json(createResObj(true, 202, catBlog.rows));
};

// DELETE Cat blog
const deleteCatBlogController = async (req, res) => {
  const { id } = req.params;

  const catBlog = await pool.query(
    `
        DELETE FROM catblogs
            WHERE id = $1 RETURNING *
    `,
    [id]
  );

  res.status(202).json(createResObj(true, 202, catBlog.rows));
};

module.exports = {
  getCatBlogsController,
  createCatBlogController,
  updateCatBlogController,
  deleteCatBlogController,
};
