import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import {BrowserRouter} from "react-router-dom"

/**
 * Perviously i'm using BrowserRouter but on refresh this giving me error so now i'm using HashRouter this not giving me error. 
 */



import { HashRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
