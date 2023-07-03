import React from 'react'
import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'
const VisibilityFilter = () => {
    const dispatch=useDispatch();
    const handleChange = (event) => {
        
        console.log('filter value',event.target.value)
        dispatch(filterChange(event.target.value))

        
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style} className='thought-container'>
            filter <input  onChange={handleChange} placeholder='search thought'/>
        </div>
    )

}

export default VisibilityFilter