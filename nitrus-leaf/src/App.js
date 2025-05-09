// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login/Login.js';
import Register1 from './pages/Register1/Register1.js'
import Register2 from './pages/Register2/Register2.js'
import Dashboard from './pages/Dashboard/Dashboard.js'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register1" element={<Register1 />}/>
        <Route path="/register2" element={<Register2 />}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}