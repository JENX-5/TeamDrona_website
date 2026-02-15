import { useState, useEffect } from 'react';

export default function RotatingMissionPatch() {
  const [imageUrl, setImageUrl] = useState('/mission-patch.png'); // Default path

  useEffect(() => {
    // Try to find the mission patch image
    const checkImage = () => {
      const img = new Image();
      img.onload = () => setImageUrl('/mission-patch.png');
      img.onerror = () => {
        // Fallback to a placeholder or different path
        setImageUrl('/team/1.jpeg'); // Using existing image as fallback
      };
      img.src = '/mission-patch.png';
    };
    checkImage();
  }, []);

  return (
    <div className="mission-patch-container">
      <div className="mission-patch-3d">
        <img 
          src={imageUrl} 
          alt="DRONA Mission Patch" 
          className="mission-patch-image"
          onError={(e) => {
            e.target.src = '/team/1.jpeg'; // Fallback image
          }}
        />
      </div>
      <div className="mission-patch-glow" />
    </div>
  );
}
