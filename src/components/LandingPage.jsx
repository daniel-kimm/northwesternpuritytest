import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import textureBackground from './assets/4ktexture.jpeg';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/test');
  };

  return (
    <div className="landing-container" style={{'--texture-bg': `url(${textureBackground})`}}>
      <div className="landing-content">
        <h1 className="landing-title">
          Welcome to the<br />
          Northwestern Purity Test
        </h1>
        <button className="get-started-button" onClick={handleGetStarted}>
          Get Started
        </button>
        <div className="social-proof">
          Taken by 4,500+ Northwestern Students
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
