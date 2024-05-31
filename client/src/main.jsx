import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { applyMiddleware, compose } from 'redux'
import { createStore } from 'redux'
import { thunk } from "redux-thunk"
import Reducers from "./Reducer"
import { GoogleOAuthProvider } from '@react-oauth/google'

const store = createStore(Reducers, compose(applyMiddleware(thunk)))

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId='703248209427-rkmnjnmp5kfrrggsl4594vs081aj1eiu.apps.googleusercontent.com'>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </GoogleOAuthProvider>
  </BrowserRouter>
)
