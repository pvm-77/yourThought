import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addLiketo } from '../reducers/thoughtReducer';


import Thought from './Thought';
import VisibilityFilter from './VisibilityFilter';
import { removeNotification, setNotification } from '../reducers/notificationReducer';
console.log('add like in thoughtlist ',addLiketo)

const ThoughtList = () => {
    // const thoughts = useSelector(state => state.thoughts);

    // additional code to handle if thoughts filter or not
    const thoughts = useSelector(state => {
        if (state.filter === '') {
            return state.thoughts

        }
        return state.filter ? state.thoughts.filter(thought =>
            thought.text.toLowerCase().includes(state.filter.toLowerCase())
        ) : state.thoughts;
    })

    const dispatch = useDispatch();
    // const handleLike=(id)=>{
    //     dispatch(addLiketo(id))
        
    //     dispatch(setNotification('u have like buddy'));
    //     setTimeout(()=>{
    //         dispatch(removeNotification(null))
    //     },3000)
    // }

    return (
        <>
            <VisibilityFilter />
            <h2 style={{ textAlign: 'center' }}>thoughts</h2>
            {thoughts.map(thought =>
                <Thought key={thought.id} thought={thought} onClick={() => dispatch(addLiketo(thought.id))} />
            )}
        </>
    )
}

export default ThoughtList