const graphql=require('../server/node_modules/graphql');

const {GraphQLObjectType, GraphQLString} = graphql;

const BookType = new GraphQLObjectType({
    name:'Book',
    fields:()=>({
        id:{type: GraphQLString},
        name:{type: GraphQLString},
        author:{type: GraphQLString},
    })
});

const RootQuery=new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type: BookType,
            args:{id:{type:GraphQLString}},
            resolve(parent, args){

            }
        }
    }
})

module.exports =schema({
    RootQuery
})