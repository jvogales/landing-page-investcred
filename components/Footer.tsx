'use client';

import Link from 'next/link';
import { WHATSAPP_URL } from '@/components/contact';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.title}>Endereço</h3>
            <p className={styles.text}>
              Rua Cel. Cecílio da Rocha, nº 212,<br />
              Centro – Jacarezinho/PR<br />
              CEP: 86400-000
            </p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.title}>Atendimento</h3>
            <div className={styles.links}>
              <Link href="mailto:contato@maxassessoria.com.br" className={styles.link}>
                contato@maxassessoria.com.br
              </Link>
              <Link href="tel:+554333711212" className={styles.link}>
                (43) 3371-1212
              </Link>
              <p className={styles.text}>Seg à Sex: 8h às 18h</p>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>
        <p className={styles.copyright}>
          © {currentYear} <strong>MAX ASSESSORIA</strong> - Consultoria Jurídica e Defesa de Direitos Financeiros. Todos os direitos reservados.
        </p>
      </div>

      {/* WhatsApp Floating Button */}
      <Link
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappFloat}
        aria-label="Conversar no WhatsApp (abre em nova aba)"
      >
        <svg aria-hidden="true" focusable="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.021 2.667C8.755 2.667 2.854 8.568 2.854 15.833c0 2.281.588 4.427 1.615 6.302L2.667 29.333l7.375-1.75c1.802.922 3.844 1.459 6.01 1.459 7.255 0 13.156-5.901 13.156-13.167 0-7.255-5.901-13.156-13.156-13.156zM25.5 15.833c0 5.24-4.26 9.5-9.5 9.5-1.677 0-3.25-.427-4.625-1.188l-.333-.198-3.458.823.865-3.177-.229-.365c-.844-1.344-1.323-2.938-1.323-4.646 0-5.24 4.26-9.5 9.5-9.5s9.5 4.26 9.5 9.5zM22.042 18.271c-.281-.146-1.677-.823-1.938-.917-.271-.104-.469-.146-.667.146-.208.292-.802 1.01-1 1.208-.188.208-.385.229-.667.083-.281-.146-1.188-.438-2.26-1.396-.844-.75-1.406-1.667-1.573-1.948-.177-.281-.021-.438.125-.573.135-.125.281-.333.427-.5.146-.177.188-.292.292-.5.104-.198.052-.375-.031-.521-.073-.146-.667-1.615-.906-2.208-.24-.583-.49-.5-.667-.5-.177-.01-.375-.01-.573-.01-.198 0-.521.073-.792.365-.271.292-1.031 1.01-1.031 2.458 0 1.458 1.052 2.865 1.198 3.063.146.208 2.073 3.167 5.021 4.438.698.302 1.25.479 1.677.615.708.229 1.354.198 1.865.125.573-.083 1.677-.688 1.917-1.344.229-.667.229-1.24.156-1.344-.083-.125-.281-.208-.573-.354z" fill="currentColor"/>
        </svg>
      </Link>
    </footer>
  );
}
