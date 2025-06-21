import React from 'react';
import HexagonBackground from './HexagonBackground';

const PersistentBackground = () => {
  return (
    <div className="position-fixed top-0 start-0 w-100 h-100" style={{ zIndex: -1 }}>
      <div className="app-bg"></div>
      <HexagonBackground />
    </div>
  );
};

export default PersistentBackground;
