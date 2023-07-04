import  { useEffect } from 'react'

// const Notification = ({ message }) => {
//   return (
//     <div>{message}</div>
//   )
// }
import Swal from 'sweetalert2'
const Notification = ({ message }) => {
  useEffect(() => {
    if (message) {
      Swal.fire({
        title: 'Notification',
        text: message,
        icon: 'success',
        showCancelButton: true,
        showConfirmButton: false,
       
      })
      
    }
  }, [message])
  return null
}
export default Notification 