import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './App.tsx'; // New wrapper for all the sections
import Signuppage from './components/Pages/SignupPage.tsx'; // Registration page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={< Signuppage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
