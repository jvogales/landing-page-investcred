'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          MAX ASSESSORIA
        </Link>
        
        <nav className={`${styles.navMenu} ${isOpen ? styles.active : ''}`} role="navigation" aria-label="Menu principal">
          <Link href="#inicio" className={styles.navLink} onClick={() => setIsOpen(false)}>
            Início
          </Link>
          <Link href="#servicos" className={styles.navLink} onClick={() => setIsOpen(false)}>
            Projetos
          </Link>
          <Link href="#sobre" className={styles.navLink} onClick={() => setIsOpen(false)}>
            Sobre
          </Link>
          <Link href="#footer" className={styles.navLink} onClick={() => setIsOpen(false)}>
            Contato
          </Link>
        </nav>

        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={isOpen}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
