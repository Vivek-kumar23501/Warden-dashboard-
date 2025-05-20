import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Navbar from './components/Navbar';
import MessReduction from './components/MessReduction';



function App() {
  return (
    <Router>
      <div className="d-flex">
        <Navbar />
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<Navbar/>} />
             <Route path="MessReduction" element={<MessReduction/>} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;