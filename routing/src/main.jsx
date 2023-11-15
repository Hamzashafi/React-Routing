import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout/>, 
    children: [
      { path: "",
       element: <Home />
          },
          { path: "about",
          element: <About />
          },
          {
            path: "contact",
            element: <Contact />
          }
          ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
