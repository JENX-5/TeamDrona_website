import React from 'react';
import ReactDOM from 'react-dom/client';
import TerminalAsteroidGame from '../components/TerminalAsteroidGame'; // adjust path

window.launchAsteroidGame = () => {
  // Prevent multiple instances
  if (document.getElementById('asteroid-game-container')) return;

  // --- Create container ---
  const container = document.createElement('div');
  container.id = 'asteroid-game-container';
  container.style.position = 'fixed';
  container.style.top = '50px';
  container.style.left = '50px';
  container.style.width = '650px';
  container.style.zIndex = 9999;
  container.style.background = 'transparent';
  container.style.cursor = 'grab';
  container.style.boxShadow = '0 8px 24px rgba(0,0,0,0.7)';
  container.style.borderRadius = '8px';
  document.body.appendChild(container);

  // --- Draggable by top 40px (like title bar) ---
  let isDragging = false;
  let startX, startY, origX, origY;

  const dragBar = document.createElement('div');
  dragBar.style.height = '40px';
  dragBar.style.cursor = 'grab';
  dragBar.style.width = '100%';
  dragBar.style.position = 'absolute';
  dragBar.style.top = '0';
  dragBar.style.left = '0';
  dragBar.style.zIndex = '10000';
  container.appendChild(dragBar);

  dragBar.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    origX = container.offsetLeft;
    origY = container.offsetTop;
    dragBar.style.cursor = 'grabbing';
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    dragBar.style.cursor = 'grab';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    container.style.left = origX + dx + 'px';
    container.style.top = origY + dy + 'px';
  });

  // --- Render game inside container ---
  const gameRoot = document.createElement('div');
  container.appendChild(gameRoot);
  const root = ReactDOM.createRoot(gameRoot);
  root.render(<TerminalAsteroidGame />);

  // --- Close on ESC ---
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      root.unmount();
      container.remove();
      window.removeEventListener('keydown', escHandler);
    }
  };
  window.addEventListener('keydown', escHandler);
};