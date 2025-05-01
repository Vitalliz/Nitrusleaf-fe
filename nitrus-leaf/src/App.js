// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage.js';
import Login from './pages/Login/Login.js';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}