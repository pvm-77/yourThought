import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addLiketo } from '../reducers/thoughtReducer';

import { FaRegComments } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';
import { BiShare } from 'react-icons/bi'
const Thought = ({ thought, onClick }) => {
    const formattedDateTime = new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });

    return (
        <>
            
            
            <div className='thought-container'>
                <div className='user-content'>
                    <div className='user-item'>
                        <img src='https://elouwerse.nl/placecircle/50' alt='user' />
                    </div>
                    <div className='user-item'>
                        <p className='small-text'><strong>NameXYZ</strong></p>
                        <p className='small-text'>
                            {formattedDateTime}
                        </p>
                    </div>

                </div>
                <div className='thought-content'>
                    <blockquote>
                        <p>{thought.text}</p>
                        <cite>{thought.author}</cite>
                    </blockquote>
                </div>

                <div>
                    <div>
                        {/* <span>likethumb</span> */}
                        <span className='small-text'>{thought.likes}</span>
                    </div>
                </div>

                <div className='thought-content-footer'>
                    <div className='thought-footer-item'>

                        <button
                            className='btn'
                            onClick={onClick}>
                            <AiOutlineLike /></button>
                        <span className='small-text'>like</span>
                    </div>

                    <div className='thought-footer-item'>
                        <button
                            className='btn'
                            onClick={onClick}>
                            <BiShare />
                        </button>
                        <span className='small-text'>share</span>
                    </div>

                    <div className='thought-footer-item'>
                        <button
                            className='btn'
                            onClick={onClick}>
                            <FaRegComments />
                        </button>
                        <span className='small-text'>comment</span>
                    </div>

                </div>
            </div>

        </>
    )
}


const ThoughtList = () => {
    const thoughts = useSelector(state => state.thoughts);
    const dispatch = useDispatch();

    return (
        <>
        <h2 style={{textAlign:'center'}}>thoughts</h2>
            {thoughts.map(thought =>
                <Thought key={thought.id} thought={thought} onClick={() => dispatch(addLiketo(thought.id))} />
            )}
        </>
    )
}

export default ThoughtList