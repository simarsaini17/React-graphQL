import React, { useState } from 'react';
import {graphql} from 'react-apollo';
import {getBooks} from '../queries/queries';
import BookDetails from './BookDetails';

const BookList=(props)=>{
    const[selectedBook,setBookId]=useState(null);

    console.log(selectedBook);

    const displayBooks=()=>{
        var data=props.data;
        if(data.loading){
            return(
                <div>Data Loading....</div>
            )
        }else{
            return data.books.map((book)=>{
                return(
                    <li key={book.id} onClick={()=>{setBookId(book.id)}}>{book.name}</li>
                )
            });
        }
    }
    return(
        <div>
            <ul id="book-list">
                {displayBooks()}
            </ul>
            <BookDetails bookId={selectedBook}/>
        </div>
    )
}

export default graphql(getBooks)(BookList);