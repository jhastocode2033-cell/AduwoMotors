import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import CarSegment from "./components/CarSegment"
import MeetUs from "./components/MeetUs"
import Contact from "./pages/Contact"


function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/navbar" element={<NavBar/>}/>
      <Route path="/hero" element={<Hero/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/carsegment" element={<CarSegment/>}/>
      <Route path="/meetus" element={<MeetUs/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
