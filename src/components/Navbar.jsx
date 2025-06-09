import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>👨‍💻 Narendra</div>

      {/* Hamburger for mobile */}
      <div 
        className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.mobileMenu : ''}`}>
        {links.map((link) => (
          <li key={link} onClick={() => setMenuOpen(false)}>
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
