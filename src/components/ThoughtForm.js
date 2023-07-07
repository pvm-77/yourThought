import React from 'react'
import { useDispatch } from 'react-redux';
import { createThought } from '../reducers/thoughtReducer';
import { removeNotification, setNotification } from '../reducers/notificationReducer';
import { createNewThought } from '../API/thought';

const ThoughtForm = () => {
    const dispatch = useDispatch();
    const addThought = async (e) => {
        e.preventDefault();
        // const newThought = {
        //     text: e.target.thought.value,
        //     author: e.target.author.value,
        //     likes: 0
        // }
        try {
            dispatch(createThought({
                text: e.target.thought.value,
                author: e.target.author.value,
                likes: 0
            }))

        } catch (error) {
            console.log(error)

        }
        // console.log('new thought is ', newThought);

        // dispatch(createThought(newThought));







        // empty fields 
        e.target.thought.value = ''
        e.target.author.value = ''
        dispatch(setNotification('congrats have created a new thought'))
        setTimeout(() => {
            dispatch(removeNotification(''))
        }, 2000)

    }
    return (
        <div className='shadow-lg  mb-4 bg-slate-800  sm:w-1/2 mx-auto p-3 rounded-lg flex items-center content-center    w-90 '>
            <form onSubmit={addThought} className='
            
            w-full
            '>
                <div className=' mt-1'>
                    <h2 className='text-white text-3xl'>what's the new thought you have?</h2>
                </div>
                <div className=' w-full m-1'>

                    <textarea className='w-3/4 bg-cyan-950 rounded h-20 pl-2 focus:outline' placeholder='your thought text here' name='thought' />

                </div>
                <div className=' w-full m-1'>
                    <input className=' w-3/4 bg-cyan-950 rounded h-10  pl-2 focus:outline' placeholder=' author name here' name='author' />
                </div>

                <button className='h-10 m-1 w-1/2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded' type='submit'>create</button>
            </form>
        </div>
    )
}

export default ThoughtForm