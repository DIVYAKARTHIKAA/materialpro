import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import {App,RadioButtonsGroup} from './App';
//import RecipeReviewCard from './Nav';
import reportWebVitals from './reportWebVitals';
//import Error from './error';
//import New from './new';
//import {Max1,Max2} from './fragment';
//import Counter from './App';
//import Lifecycle from './Lifecycle';
import App from './App';
//import RegisterForm from './pages/form';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
