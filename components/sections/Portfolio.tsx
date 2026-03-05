'use client';

import { motion } from 'framer-motion';
import styles from './Portfolio.module.css';

interface PortfolioItemProps {
  title: string;
  tags: string[];
  index: number;
}

const PortfolioItem = ({ title, tags, index }: PortfolioItemProps) => {
  return (
    <motion.div
      className={styles.item}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: '0px 20px 40px rgba(72, 209, 204, 0.25)' }}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.tags}>
          {tags.map((tag, i) => (
            <motion.span
              key={i}
              className={styles.tag}
              whileHover={{ scale: 1.05 }}
            >
              {tag}
              {i < tags.length - 1 && <span className={styles.separator}>•</span>}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Portfolio() {
  const items = [
    {
      title: 'Identificação de Irregularidades',
      tags: ['Análise', 'Detalhada'],
    },
    {
      title: 'Orientação Jurídica',
      tags: ['Especializada', 'Qualificada'],
    },
    {
      title: 'Ações Judiciais',
      tags: ['Contra Bancos', 'Eficaz'],
    },
    {
      title: 'Restituição e Cancelamento',
      tags: ['Direitos Garantidos', 'Sucesso'],
    },
  ];

  return (
    <section id="servicos" className={styles.portfolio}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className={styles.title}>Como defendemos seus direitos</h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, staggerChildren: 0.15 }}
        >
          {items.map((item, index) => (
            <PortfolioItem key={index} {...item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
