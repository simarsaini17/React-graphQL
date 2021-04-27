import React from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getBooks=gql`
{
    books{
        name
        id
    }
}`;


const BookList=(props)=>{
    console.log(props)

    const displayBooks=()=>{
        var data=props.data;
        if(data.loading){
            return(
                <div>Data Loading....</div>
            )
        }else{
            return data.books.map((book)=>{
                return(
                    <li key={book.id}>{book.name}</li>
                )
            });
        }
    }
    return(
        <div>
            <ul id="book-list">
                {displayBooks()}
            </ul>
        </div>
    )
}

export default graphql(getBooks)(BookList);