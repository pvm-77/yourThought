import axios from "axios";

export const getThoughts=async()=>{
    try {
        const response=await axios.get('/db.json')
        console.log('response from file is',response)
    } catch (error) {
        console.error('error is ',error)
        
    }

}