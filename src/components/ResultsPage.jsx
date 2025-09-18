import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './NorthwesternPurityTest.css';
import textureBackground from './assets/4ktexture.jpeg';
import { Analytics } from "@vercel/analytics/react";

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedPrompts, totalPrompts } = location.state || { selectedPrompts: [], totalPrompts: 107 };
  
  const calculatePurityScore = () => {
    return Math.round((1 - selectedPrompts.length / totalPrompts) * 100);
  };

  const resetTest = () => {
    navigate('/#test');
  };

  return (
    <div className="container" style={{'--texture-bg': `url(${textureBackground})`}}>
      <div className="card">
        <div className="header">
          <h2>Northwestern Purity Test</h2>
        </div>
        <div className="content">
          <div className="results">
            <h2>Your Northwestern Purity Score</h2>
            <div className="score">{calculatePurityScore()}</div>
            <p>Out of {totalPrompts} total Northwestern experiences</p>
            <div className="checked-items">
              <h3>Your checked experiences:</h3>
              <div className="checked-list">
                {selectedPrompts.map((prompt, index) => (
                  <div key={index} className="checked-item">{prompt}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <button onClick={resetTest}>
            Take Test Again
          </button>
        </div>
      </div>
      <Analytics />
    </div>
  );
};

export default ResultsPage;
