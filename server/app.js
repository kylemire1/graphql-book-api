const express = require("express");
const graphqlHTTP = require("express-graphql");

const schema = require("./graphql/schema");
require("./database.js");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
