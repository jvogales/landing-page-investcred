'use client';

import { motion } from 'framer-motion';
import styles from './CTASection.module.css';
import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Quer saber como defendemos seus direitos?</h2>
          <p className={styles.subtitle}>
            Agende uma consultoria gratuita com nossos especialistas e descubra como recuperar seu dinheiro.
          </p>

          <motion.div
            className={styles.buttons}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="https://wa.me/5531999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consultoria%20gratuita%20com%20a%20MAX." target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg">
                ✓ AGENDAR CONSULTORIA
              </Button>
            </a>
            <a href="#servicos">
              <Button variant="secondary" size="lg">
                CONHECER SERVIÇOS
              </Button>
            </a>
          </motion.div>

          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <span>✓ Análise Gratuita</span>
            </div>
            <div className={styles.benefit}>
              <span>✓ Sem Compromisso</span>
            </div>
            <div className={styles.benefit}>
              <span>✓ Resultado Garantido</span>
            </div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className={styles.decoration1} />
        <div className={styles.decoration2} />
      </div>
    </section>
  );
}
