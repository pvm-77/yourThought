
// filter action


const notificationReducer = (state = null, action) => {
    // console.log('notice state is ',state,action.type)
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.payload;
        case 'REMOVE_NOTIFICATION':

            return null;
        default:
            return state;
    }
}
export const setNotification = (notificationMessage) => {
    return {
        type: 'SET_NOTIFICATION',
        payload: notificationMessage
    }
}
export const removeNotification = (notificationMessage) => {
    return {
        type: 'REMOVE_NOTIFICATION',
        payload: notificationMessage,
    }
}
export default notificationReducer;