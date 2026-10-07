import { useEffect, useState } from 'react';
import { FileText } from 'lucide-react';
import { navLinks, profile } from '../data/content';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand" aria-label="Back to top">
          <span className="navbar__logo">AP</span>
          <span className="navbar__name">{profile.name}</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="navbar__link">
              {l.label}
            </a>
          ))}
        </nav>

        <a id="nav-resume" href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
          <FileText size={15} /> Resume
        </a>
      </div>
    </header>
  );
}
