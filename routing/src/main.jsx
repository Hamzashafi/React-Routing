import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/', element: <Layout/>, children: [
      { index: true }, // default route
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
