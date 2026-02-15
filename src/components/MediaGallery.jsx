import { useState, useEffect } from 'react';

export default function MediaGallery() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/gallery/gallery.json')
      .then(res => res.ok ? res.json() : [])
      .then(data => setItems(Array.isArray(data) ? data : []))
      .catch(() => setItems([]));
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="media-gallery">
      {items.map((item, i) => (
        <div key={i} className={`media-gallery-item ${item.type}`}>
          {item.type === 'video' ? (
            <video loop muted playsInline autoPlay preload="metadata">
              <source src={`/gallery/${item.src}`} type="video/mp4" />
            </video>
          ) : (
            <img src={`/gallery/${item.src}`} alt="" loading="lazy" />
          )}
        </div>
      ))}
    </div>
  );
}
