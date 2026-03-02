import {   RouterProvider,
BrowserRouter, Routes, Route, Link, createBrowserRouter } from 'react-router-dom';


import Navbar from "./components/Navbar"
import About from './components/About';
import Help from './components/Help';
import Home from './components/Home';




const router = createBrowserRouter([

  {
    path:"/",
    element:<Home/>,
  },

    {
    path:"/about",
    element:<About/>,
  },

    {
    path:"/help",
    element:<Help/>
  },
]
);

function App() {
  

  return (
    <div>
      <Navbar/>
      <RouterProvider router={router} />
      </div>

  )
}

export default App
