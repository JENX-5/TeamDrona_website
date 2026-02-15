import React from 'react';

export default function RotatingMissionPatch() {
  return (
    <div className="mission-patch-container">
      <div className="mission-patch-wrapper">
        <img 
          src="/mission_patch.png" 
          alt="DRONA Mission Patch" 
          className="mission-patch"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div className="mission-patch-fallback">
          <div className="patch-text">DRONA</div>
          <div className="patch-subtitle">MISSION PATCH</div>
        </div>
      </div>
    </div>
  );
}
