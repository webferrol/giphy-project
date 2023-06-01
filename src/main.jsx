import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import GiphyApp from './GiphyApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <GiphyApp title='Buscador Gifs' />
  </React.StrictMode>
)
