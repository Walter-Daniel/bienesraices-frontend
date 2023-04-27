import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, RouterProvider } from "react-router-dom";

import { store } from './store/store';
import { Provider } from 'react-redux';

import 'antd/dist/reset.css';
import './styles.css'
import { AppRouter } from './router';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store } >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
