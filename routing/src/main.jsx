import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Github, {githubInfoLoader} from './components/Github/Github';
import { Route, Router, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import User from './components/User/User';

// const router = createBrowserRouter([
//   {
//     path: '/', 
//     element: <Route/>, 
//     children: [
//       { 
//         path: "",
//        element: <Home/>
//           },
//           { 
//             path: "about",
//           element: <About/>
//           },
//           {
//             path: "contact",
//             element: <Contact/>
//           }
//           ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Router path='/' element={<Route />}>
      <Routes path='' element={<Home />} />
      <Routes path="about" element={<About />} />
      <Routes path="contact" element={<Contact />} />
      <Routes path='user/userID' element={<User/>}/>
      <Routes
      loader = {githubInfoLoader}
      path = 'github'
      element = {<Github/>}
      />
      </Router>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
