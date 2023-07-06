
import axios from "axios";

// const url = 'https://65ry7y-3000.csb.app/';
// const url = 'https://samplethought.onrender.com/';
const url='http://localhost:3004/thoughts'

export const getThoughts = async () => {
  console.log('url is', url);
  
  try {
    const response = await axios.get(url);
    console.log('data from url', response.data);
    return response.data; // Return the actual data from the response
  } catch (error) {
    console.error('Error in fetch thoughts', error);
    throw error; // Throw the error to be handled by the caller
  }
};

export const updateLike=async(id,updatedObject)=>{
  const response=axios.put(url,id,updatedObject);
  return (await response).data;

}
  

export const createNewThought = async (newThoughtObject) => {
    console.log('data in api',newThoughtObject)
    const response = await axios.post(url, newThoughtObject);
    console.log('response in api call',response)
    return response.data
}