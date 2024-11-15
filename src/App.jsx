import React, { useState } from 'react';
import './App.css';
import HighlightingTypingEffect from 'highlightingtypingeffect';
import data from './data.json';

function App() {
  const [showHighlight, setShowHighlight] = useState(false); // State to control rendering

  const handleStartClick = () => {
    setShowHighlight(true);
  };

  return (
    <div className="app-container">
      {/* Heading */}
      <div className="heading-container">
        <h1>HighlightingTypingEffect</h1>
        <p>Enhance your web projects with typing effects and text highlights.</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg"
          alt="npm logo"
        />
      </div>

      {/* Content */}
       {showHighlight ? (<div className="container">
       
          <HighlightingTypingEffect json={data} /></div>
        ) : (
          <button className="start-button" onClick={handleStartClick}>
            Start
          </button>
        )}
      

      {/* Footer */}
      <div className="footer">
        <p>Made by <strong>Mithlesh</strong></p>
      </div>
    </div>
  );
}

export default App;
