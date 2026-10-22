'use client';

import { motion } from 'framer-motion';
import styles from './Highlights.module.css';

interface HighlightItemProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const HighlightItem = ({ title, description, icon, index }: HighlightItemProps) => {
  return (
    <motion.div
      className={styles.item}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        type: 'spring',
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ y: -10, boxShadow: '0px 20px 40px rgba(72, 209, 204, 0.3)' }}
    >
      <div className={styles.iconWrapper}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </motion.div>
  );
};

export default function Highlights() {
  const highlights = [
    {
      title: 'Especialistas em RMC',
      description: 'Especializados em análise de contratos de Cartões RMC e intermediação jurídica.',
      icon: '📊',
    },
    {
      title: 'Orientação individual',
      description: 'Informações sobre seus direitos e as possibilidades de atendimento para o seu caso.',
      icon: '✅',
    },
    {
      title: 'Atendimento Humanizado',
      description: 'Equipe dedicada a defender seus direitos com ética, transparência e eficácia.',
      icon: '🤝',
    },
    {
      title: 'Processo Ágil',
      description: 'Análise rápida de contratos e orientação jurídica especializada e qualificada.',
      icon: '⚡',
    },
  ];

  return (
    <section className={styles.highlights}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className={styles.title}>Por que escolher a MAX ASSESSORIA</h2>
          <p className={styles.subtitle}>Conheça os diferenciais que nos tornam referência em intermediação jurídica</p>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          {highlights.map((highlight, index) => (
            <HighlightItem key={index} {...highlight} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
