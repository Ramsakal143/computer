import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Service from "./components/Service";
import { Route,Routes } from "react-router-dom";

import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

const App=()=>{
    return(
        <>
            <Header/>
            {/* <Home/>
            <About/>
            <Service/>
            <Contact/> */}
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/service" element={<Service/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </>
    )
}
export default App