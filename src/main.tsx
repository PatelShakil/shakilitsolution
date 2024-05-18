import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import React from 'react'

import BrowserRouter from 'react-router-dom/BrowserRouter'

ReactDOM.render((
   <BrowserRouter basename={process.env.PUBLIC_URL}>
     <App />
   </BrowserRouter>
))  