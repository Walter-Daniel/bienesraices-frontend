import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider } from "react-router-dom";

import { store } from './store/store';
import { Provider } from 'react-redux';

import 'antd/dist/reset.css';
import './styles.css'
import { AppRouter } from './router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store } >
      <RouterProvider router={AppRouter} />
    </Provider>
  </React.StrictMode>,
)
