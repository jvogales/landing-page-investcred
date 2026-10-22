'use client';

import { motion } from 'framer-motion';
import styles from './Atendimento.module.css';

// Explain the service without attributing unverified statements to clients.
const steps = [
  { title: 'Conte sua situação', text: 'Entre em contato e explique os descontos ou dúvidas sobre seu contrato bancário.', icon: '💬' },
  { title: 'Entenda as possibilidades', text: 'A equipe analisa as informações disponíveis e orienta sobre os próximos passos para o seu caso.', icon: '🔎' },
  { title: 'Decida com informação', text: 'Tire suas dúvidas sobre o atendimento antes de decidir como deseja prosseguir.', icon: '🤝' },
];

export default function Atendimento() {
  return (
    <section className={styles.section} aria-labelledby="atendimento-titulo">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 id="atendimento-titulo" className={styles.title}>Como funciona o atendimento</h2>
          <p className={styles.subtitle}>Conheça os primeiros passos para conversar com a MAX ASSESSORIA</p>
        </div>
        <div className={styles.grid}>
          {steps.map(step => (
            <motion.article key={step.title} className={styles.card} initial={false}>
              <div className={styles.icon} aria-hidden="true">{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.description}>{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
