import { useEffect, useRef } from 'react';

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      navRef.current?.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="navbar" ref={navRef}>
      <a href="#" className="logo">
        <img src="/android-chrome-512x512.png" alt="Faylen Systems Logo" style={{ height: '100px', width: 'auto' }} />
      </a>
      <ul className="nav-links">
        <li><a href="#problem">The Problem</a></li>
        <li><a href="#capabilities-wrapper">Capabilities</a></li>
        <li><a href="#how-wrapper">How It Works</a></li>
        <li><a href="#final-cta" className="nav-cta">Request a Briefing</a></li>
      </ul>
    </nav>
  );
}
