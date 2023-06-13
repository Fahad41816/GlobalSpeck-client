import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route.jsx'
import {  QueryClient,  QueryClientProvider,} from '@tanstack/react-query'
import Authprovider from './context/Authprovider.jsx'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Authprovider>
    <QueryClientProvider client={queryClient} >
      <RouterProvider router={router}></RouterProvider>    
    </QueryClientProvider>
  </Authprovider>
  </React.StrictMode>,
)
