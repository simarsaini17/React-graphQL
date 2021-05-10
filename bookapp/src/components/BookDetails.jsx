import React from 'react';
import {graphql} from 'react-apollo';
import {getBook} from '../queries/queries';


const BookDetails=(props)=>{  

    const DisplayBooks=()=>{
        const {book}=props.data;
        console.log(book);
        if(book){
            return(
                <div >
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <h6>All Books by Author:</h6>
                    <ul className="other-books">
                        {book.author.books.map((book)=>{
                            return(
                                <li key={book.id}>{book.name}</li>
                            )
                        })}
                        </ul>                 
                </div>
            )
        }

    }
    
    return(
        <div id="book-details">
           {DisplayBooks()}
        </div>
    )
}

export default graphql(getBook,{
    options:(props)=>{
        return{
            variables:{
                id:props.bookId,
            }
        }
    }
})(BookDetails);