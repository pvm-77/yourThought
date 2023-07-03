import React from 'react'
import { useDispatch } from 'react-redux';
import { createThought } from '../reducers/thoughtReducer';

const ThoughtForm = () => {
    const dispatch = useDispatch();
    const addThought = (e) => {
        e.preventDefault();

        const newThought = {
            text: e.target.thought.value,
            author: e.target.author.value,
        }
        console.log('new thought is ', newThought);
        dispatch(createThought(newThought));
        // empty fields 
        e.target.thought.value=''
        e.target.author.value=''

    }
    return (
        <div className='thought-container'>
            <form onSubmit={addThought}>
                <div>
                    <h2>what's the new thought you have?</h2>
                </div>
                <div>

                    <textarea placeholder='your thought text here' name='thought' />

                </div>
                <div>
                    <input placeholder='author name here' name='author' />
                </div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default ThoughtForm