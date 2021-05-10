import React, { useState } from 'react';
import {getAuthors,addBookMutation,getBooks} from '../queries/queries';
import {useQuery,useMutation} from 'react-apollo';

const AddBooks=(props)=>{
    const [form,setformData]=useState({name:"",genre:"",authorId:""}); 
     const {loading, data} = useQuery(getAuthors);
     const [addBook] = useMutation(addBookMutation); 

     const {name,genre,authorId}=form

const AddAuthors=()=>{    
    if(loading){
        return(
            <option disabled>Loading Authors...</option>
        )
    }else {                 
        return data.authors.map((author)=>{
            return(
                <option key={author.id} value={author.id}>{author.name}</option>
            );
        });
    }
}

const submit=(event)=>{
    event.preventDefault();
    addBook({variables:{
        name:name,
        genre:genre,
        authorId:authorId
    },
    refetchQueries:[{query:getBooks}]
});
}



    return(
        <form id="add-book" onSubmit={submit}>
            <div className="field">
                <label>Book Name:</label>
                <input type='text' onChange={(event)=>setformData({...form,name:event.target.value})}></input>
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type='text' onChange={(event)=>setformData({...form,genre:event.target.value})}></input>
            </div>
            <div className="field">
                <label>Authors:</label>
                <select onChange={(event)=>setformData({...form,authorId:event.target.value})}>
                    {AddAuthors()}
                </select>
            </div>
            <button>+</button>
        </form>
    )
}

export default AddBooks;