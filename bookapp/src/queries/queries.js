import {gql} from 'apollo-boost';

const getBooks=gql`
{
    books{
        name
        id
    }
}`;

const getAuthors=gql`
{
    authors{
        name
        id
    }
}`;

export {getAuthors,getBooks};