'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/landing/Icon';
import Link from 'next/link';

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return <Link href="/#inicio" className={`brand${inverse ? ' brand--inverse' : ''}`} aria-label="MAX Assessoria — início"><span className="brand-symbol" aria-hidden="true"><span /><span /><span /></span><span className="brand-wordmark">MAX{' '}<span>ASSESSORIA</span></span></Link>;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => { if (!headerRef.current?.contains(event.target as Node)) setOpen(false); };
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); triggerRef.current?.focus(); } };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape); };
  }, [open]);
  return <header className="site-header" ref={headerRef}>
    <div className="shell header-inner">
      <Brand />
      <button className="menu-trigger" ref={triggerRef} type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-controls="menu-principal" aria-expanded={open} onClick={() => setOpen(value => !value)}><Icon name={open ? 'close' : 'plus'} size={24} /></button>
      <nav id="menu-principal" className={`main-nav${open ? ' is-open' : ''}`} aria-label="Menu principal" onBlur={event => { if (!headerRef.current?.contains(event.relatedTarget as Node | null)) setOpen(false); }}>
        <Link href="/#servicos" onClick={() => setOpen(false)}>Como ajudamos</Link>
        <Link href="/#sobre" onClick={() => setOpen(false)}>A MAX</Link>
        <Link href="/#duvidas" onClick={() => setOpen(false)}>Dúvidas frequentes</Link>
        <Link className="button button--small" href="/#orientacao" onClick={() => setOpen(false)}>Conversar com a MAX <Icon name="arrowUp" size={16} /></Link>
      </nav>
    </div>
  </header>;
}
