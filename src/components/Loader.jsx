// src/components/Loader.js
import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete(); // Notify when loading finishes
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust speed here
  }, [onComplete]);

  return (
    <div className="loader-container">
      <div className="progress-ring">
        <svg className="ring" viewBox="0 0 120 120">
          <circle className="bg" cx="60" cy="60" r="54" />
          <circle
            className="bar"
            cx="60"
            cy="60"
            r="54"
            style={{ strokeDashoffset: 339.29 - (339.29 * progress) / 100 }}
          />
        </svg>
        <div className="percentage">{progress}%</div>
      </div>
    </div>
  );
};

export default Loader;
