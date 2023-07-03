import React from 'react'
import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'
const VisibilityFilter = () => {
    const dispatch=useDispatch();
    const handleChange = (event) => {
        // input-field value is in variable event.target.value
        console.log('filter value',event.target.filtertext.value)
        dispatch(filterChange(event.target.filtertext.value))

        
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style} className='thought-container'>
            filter <input name='filtertext' onChange={handleChange} placeholder='search thought'/>
        </div>
    )

}

export default VisibilityFilter