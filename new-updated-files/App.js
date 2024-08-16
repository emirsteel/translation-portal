// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import TranslationPage from './pages/TranslationPage';

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 ml-20 lg:ml-64 p-4">
          <Routes>
            <Route path="/" element={<TranslationPage />} />
            {/* Add other routes here as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
