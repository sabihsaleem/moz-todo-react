import * as React from "react";
import { Routes, Route, Link, } from "react-router-dom";
import "./App.css";
import { Home, About } from "./screens"

const navStyle = {
  color: 'blue',
  backgroundColor: 'red',
  margin: '10px',
  padding: '10px',
  flexDirection: 'column',
  width: '70%',
  justifyContent: 'center'
}

const navAboutStyle = {
  paddingLeft: '50px',
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <nav style={navStyle}>
        <Link to="/home">Home</Link>
        <Link style={navAboutStyle} to="/about">About</Link>
      </nav>
    </div>
  );
}

export default App;
