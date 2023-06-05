import React from 'react'
import ReactDOM from 'react-dom/client'
import GiphyApp from './GiphyApp'
// import App from './App.jsx'
// import { ButtonApp } from './ButtonApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GiphyApp title='Buscador Gifs' />
  </React.StrictMode>
)
