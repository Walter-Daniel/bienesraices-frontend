import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { store } from './store/store';
import { Provider } from 'react-redux';

import 'antd/dist/reset.css';
import './styles.css'
import { Login } from './auth/login/Login';
import { Register } from './auth/register/Register';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store } >
      <Register />
    </Provider>
  </React.StrictMode>,
)
