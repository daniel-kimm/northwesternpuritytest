import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import ResultsPage from './components/ResultsPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/result" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
