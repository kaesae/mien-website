import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState, useTransition } from "react";

import './App.css';
import ContactMe from "./Components/ContactMe";
import Dictionary from "./Components/Dictionary";
import LandingPage from "./Components/LandingPage";
import './CSS/styles.css';


function App() {
    
  const handleChange = (value) => {

  }

  const handleClick = () => {

  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/dictionary' element={<Dictionary />}></Route>
        {/* <Route path='/about' element={<About />}></Route> */}
        <Route path='/contactme' element={<ContactMe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
