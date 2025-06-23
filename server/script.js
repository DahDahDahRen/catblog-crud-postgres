const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const catBlogRoutes = require("./router/catBlogRoutes");
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("dev"));

app.use("/api/v1/cats", catBlogRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Running server on PORT: 3000!`);
});
