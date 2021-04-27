import React from 'react';
import {graphql} from 'react-apollo';
import {getAuthors} from '../queries/queries';

const AddBooks=(props)=>{
    console.log(props);

const addAuthors=()=>{
    var data=props.data;
    if(data.loading){
        return(
            <option disabled>Loading Authors...</option>
        )
    }else{
        return data.authors.map((author)=>{
            return(
                <option key={author.id} value={author.id}>{author.name}</option>
            );
        });
    }
} 
    return(
        <form id="add-book">
            <div className="field">
                <label>Book Name:</label>
                <input type='text'></input>
            </div>
            <div className="field">
                <label>Genere:</label>
                <input type='text'></input>
            </div>
            <div className="field">
                <label>Authors:</label>
                <select>
                    {addAuthors()}
                </select>
            </div>
            <button>+</button>
        </form>
    )
}

export default graphql(getAuthors)(AddBooks);