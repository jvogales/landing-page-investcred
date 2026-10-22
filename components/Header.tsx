'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  return (
    <header className={styles.header} ref={header}>
      <div className={styles.container}>
        <Link href="#inicio" className={styles.logo} onClick={() => setIsOpen(false)}>
          MAX ASSESSORIA
        </Link>
        <button
          ref={menuButton}
          type="button"
          className={styles.hamburger}
          onClick={() => setIsOpen(open => !open)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="menu-principal"
        >
          <span aria-hidden="true">{isOpen ? '×' : '☰'}</span>
        </button>
        <nav id="menu-principal" className={`${styles.navMenu} ${isOpen ? styles.active : ''}`} aria-label="Menu principal"
          onBlur={event => {
            if (!header.current?.contains(event.relatedTarget as Node | null)) setIsOpen(false);
          }}>
          <Link href="#inicio" className={styles.navLink} onClick={() => setIsOpen(false)}>Início</Link>
          <Link href="#servicos" className={styles.navLink} onClick={() => setIsOpen(false)}>Serviços</Link>
          <Link href="#sobre" className={styles.navLink} onClick={() => setIsOpen(false)}>Sobre</Link>
          <Link href="#footer" className={styles.navLink} onClick={() => setIsOpen(false)}>Contato</Link>
        </nav>
      </div>
    </header>
  );
}
