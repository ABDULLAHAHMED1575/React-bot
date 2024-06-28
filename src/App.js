import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import Bot from './Screen/Bot';
import {Home} from './Screen/Home'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-red-100 w-full h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
        <Bot />
      </Router>
    </div>
  );
}

export default App;
