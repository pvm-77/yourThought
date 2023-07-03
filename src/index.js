import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import thoughtReducer from './reducers/thoughtReducer';
// import { createStore } from 'redux'
// const store = createStore(thoughtReducer)
import {store} from './store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


