'use client';

import { motion } from 'framer-motion';
import styles from './CTASection.module.css';
import { LinkButton } from '@/components/ui/Button';
import { WHATSAPP_URL } from '@/components/contact';

export default function CTASection() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Quer saber como defendemos seus direitos?</h2>
          <p className={styles.subtitle}>
            Converse com a equipe para entender as possibilidades de atendimento e os próximos passos para o seu caso.
          </p>

          <motion.div
            className={styles.buttons}
            initial={false}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <LinkButton href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
              Conversar no WhatsApp <span className="sr-only">(abre em nova aba)</span>
            </LinkButton>
            <LinkButton href="#servicos" variant="secondary" size="lg">
              Conhecer serviços
            </LinkButton>
          </motion.div>

          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <span>✓ Orientação especializada</span>
            </div>
            <div className={styles.benefit}>
              <span>✓ Informações claras</span>
            </div>
            <div className={styles.benefit}>
              <span>✓ Atendimento personalizado</span>
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
