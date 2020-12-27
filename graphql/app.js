const express=require('../server/node_modules/express');
const {graphqlHTTP}=require('../server/node_modules/express-graphql');
const schema=require('../schema/schema');
const app=express();

app.use('/graphql', graphqlHTTP({
     // we need to pass options in this callback function
//this callback function will take schema of the graphql
    schema,
    graphiql:true,
}));
    




app.listen(4000,()=>{
    console.log('I am listening to port 4000');
});