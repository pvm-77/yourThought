
// filter action


const notificationReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':

            return state;
        case 'REMOVE_NOTIFICATION':

            return state;
        default:
            return state;
    }
}
export const setNotification = () => {
    return {
        type: 'SET_NOTIFICATION',
        payload: ''
    }
}
export const removeNotification = () => {
    return {
        type: 'REMOVE_NOTIFICATION',
        payload: ''
    }
}
export default notificationReducer;