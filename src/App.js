import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import NorthwesternPurityTest from './components/NorthwesternPurityTest.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<NorthwesternPurityTest />} />
      </Routes>
    </Router>
  );
}

export default App;
