import Navbar from "./components/Navbar"
import {Routes,Route} from "react-router-dom"
import Products from "./components/Products"
import Contact from "./components/Contact"
import About from "./components/About"
import Home from "./components/Home"
import CardDetails from "./components/CardDetails"

import "swiper/css";
import "swiper/css/pagination";
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/contactus" element={<Contact/>}></Route>
        <Route path="/aboutus" element={<About/>}></Route>
        <Route path="/products/:id" element={<CardDetails/>}></Route>
      </Routes>
    </>
  )
}

export default App
