

import filterReducer from "./reducers/filterReducer";
import notificationReducer from "./reducers/notificationReducer";
import thoughtReducer from "./reducers/thoughtReducer";
import { createStore,combineReducers } from "redux";
const reducer=combineReducers({
    thoughts:thoughtReducer,
    filter:filterReducer,
    notification:notificationReducer
})

export const store=createStore(reducer)

