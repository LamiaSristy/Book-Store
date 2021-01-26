import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import reducer from './reducers/index';

const initialState = [
  {
    ID: 1,
    title: 'Title 1',
    category: 'Cat-1',

  },
  {
    ID: 2,
    title: 'Title 1',
    category: 'Cat-1',

  },
  {
    ID: 3,
    title: 'Title 1',
    category: 'Cat-1',

  },
];

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
