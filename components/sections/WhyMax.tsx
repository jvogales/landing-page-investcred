'use client';

import { motion } from 'framer-motion';
import styles from './WhyMax.module.css';

export default function WhyMax() {
  const reasons = [
    {
      icon: '🎯',
      title: 'Experiência de 15+ Anos',
      description: 'Atuação comprovada no mercado de intermediação jurídica e análise de contratos.',
    },
    {
      icon: '📈',
      title: 'Taxa de Sucesso de 87%',
      description: 'Recuperação bem-sucedida de direitos financeiros para nossos clientes.',
    },
    {
      icon: '🛡️',
      title: 'Suporte Especializado',
      description: 'Equipe dedicada de advogados e consultores à sua disposição.',
    },
    {
      icon: '⚡',
      title: 'Processo Ágil',
      description: 'Análise rápida e resolução eficiente de contratos e recursos.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className={styles.whyMax}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Esquerda - Conteúdo */}
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.title}>Por que escolher a MAX?</h2>
            <p className={styles.subtitle}>
              Somos mais que uma consultoria. Somos seu parceiro na recuperação de direitos financeiros.
            </p>

            <motion.div
              className={styles.reasons}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {reasons.map((reason, index) => (
                <motion.div key={index} className={styles.reason} variants={itemVariants}>
                  <div className={styles.reasonIcon}>{reason.icon}</div>
                  <div className={styles.reasonText}>
                    <h4>{reason.title}</h4>
                    <p>{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Direita - Ilustração */}
          <motion.div
            className={styles.illustration}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.illustrationBox}>
              <div className={styles.illustrationCircle1}>
                <span>🏆</span>
              </div>
              <div className={styles.illustrationCircle2}>
                <span>💡</span>
              </div>
              <div className={styles.illustrationCircle3}>
                <span>🚀</span>
              </div>
              <div className={styles.illustrationCenter}>
                <span>MAX</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
