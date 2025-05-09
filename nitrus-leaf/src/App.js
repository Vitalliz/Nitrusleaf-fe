// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login/index.js';
import RegisterB from './pages/RegisterB/index.js'
import Register1 from './pages/Register1/index.js'
import Register2 from './pages/Register2/index.js'
import Dashboard from './pages/Dashboard/index.js'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registerb" element={<RegisterB />} />
        <Route path="/register1" element={<Register1 />}/>
        <Route path="/register2" element={<Register2 />}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}