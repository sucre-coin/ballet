import React from 'react';
import './Container.css';

const BackgroundContainer = ({ children }) => {
  return (
    <div className="background-container">
      {children}
    </div>
  );
};

const ContentContainer = ({ children }) => {
  return (
    <div className="content-container">
      {children}
    </div>
  );
};

export { BackgroundContainer, ContentContainer };
