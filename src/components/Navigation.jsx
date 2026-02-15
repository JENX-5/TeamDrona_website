import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/logo.png" alt="DRONA Rocket Team" />
        </Link>
        <div className="nav-links">
          <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
          <Link to="/rocket" className={isActive('/rocket') ? 'active' : ''}>Rocket</Link>
          <Link to="/team" className={isActive('/team') ? 'active' : ''}>Team</Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
