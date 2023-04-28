import { Link, Route, Routes } from "react-router-dom";

import './App.css';

import Left from './Components/Left.js'
import Right from "./Components/Right";

function App() {
  return (
    <div className="App">
      <Left />
      <Right />
    </div>
  );
}

export default App;
