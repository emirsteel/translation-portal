// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TranslationPage from './pages/TranslationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/translate" element={<TranslationPage />} />
        <Route exact path="/" element={<TranslationPage />} /> {/* Adjust this as needed */}
      </Routes>
    </Router>
  );
}

export default App;
