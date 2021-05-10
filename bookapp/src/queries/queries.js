import {gql} from 'apollo-boost';

const getBooks=gql`
query GetBooks{
    books {
        name
        id
    }
}`;

const getAuthors=gql`
query GetAuthors{
    authors {
        name
        id
    }
}`;
const addBookMutation=gql`
    mutation addBook($name:String!, $genre:String!, $authorId:ID!){
        addBook(name:$name, genre:$genre, authorId:$authorId){
            name
            genre
            id        
    }
}
`;

const getBook=gql`
 query getBook($id:ID){
    book(id:$id){
        id
        name
        genre
        author{
            id
            name
            age
            books{
                name
                id
            }
        }
    }
}

`;
export {getAuthors,getBooks,addBookMutation,getBook};