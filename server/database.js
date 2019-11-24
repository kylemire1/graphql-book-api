const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connection = mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-vik7c.mongodb.net/graphql-course?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(res => console.log("Connected to DB"))
  .catch(err => console.error("Error Connecting to DB:", err.reason));

module.exports = connection;
