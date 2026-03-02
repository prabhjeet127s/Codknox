import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
function App() {


  return (
    <>
      <Link to="/"><h1>Home</h1></Link>
      <Link to="/about"><h1>About</h1></Link>
      <Link to="/contact"><h1>Contact</h1></Link>







      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />


      </Routes>

    </>
  )
}

export default App
