const express = require("express");
const app = express();
const {graphqlHTTP} = require("express-graphql");
const schema = require("./schema/schema");

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://GursimratKaur:9XTEYWvm0Usle0n8@cluster1.t93pi.mongodb.net/graphql-ninja?retryWrites=true&w=majority");
mongoose.connection.once('open',()=>{
  console.log("connected");
})

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("I am listening to port 4000");
});
