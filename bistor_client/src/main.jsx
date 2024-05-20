import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router.jsx'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './FIREBASE/AuthProvider.jsx'

import Swal from 'sweetalert2'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<AuthProvider>
<HelmetProvider>

<RouterProvider router={router}></RouterProvider>

</HelmetProvider>



</AuthProvider>



  </React.StrictMode>,
)
