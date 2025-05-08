import { Route, Routes } from "react-router-dom";

import './App.css';
import ContactMe from "./Components/ContactMe";
import Dictionary from "./Components/Dictionary";
import LandingPage from "./Components/LandingPage";
import './CSS/styles.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
  return (
    <div id="App">
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/dictionary' element={<Dictionary />}></Route>
        {/* <Route path='/about' element={<About />}></Route> */}
        <Route path='/contactme' element={<ContactMe />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
