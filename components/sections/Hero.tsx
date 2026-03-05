'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const benefits = [
    { icon: '⚖️', label: 'Ação Jurídica', value: '87% de sucesso' },
    { icon: '💰', label: 'Recuperação', value: 'Até R$ 50 mil' },
    { icon: '🚀', label: 'Rápido', value: 'Em poucas semanas' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="inicio" className={styles.hero} ref={ref}>
      {/* Background elements */}
      <div className={styles.bgGradient} />
      <div className={styles.bgPattern} />
      
      <motion.div 
        className={styles.container}
        style={{ y: backgroundY }}
      >
        {/* Illustration - Left side circles */}
        <motion.div
          className={styles.illustration}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            className={styles.circle1}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span>🎯</span>
          </motion.div>
          <motion.div
            className={styles.circle2}
            animate={{
              y: [0, 15, 0],
              rotate: [0, -8, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span>⚖️</span>
          </motion.div>
          <motion.div
            className={styles.circle3}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 6, 0]
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span>💰</span>
          </motion.div>
        </motion.div>

        {/* Content - Center */}
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.badge} variants={itemVariants}>
            ✨ Consultoria 100% Gratuita
          </motion.div>

          <motion.h1 className={styles.title} variants={itemVariants}>
            Recupere seus direitos <br />
            <span className={styles.highlight}>financeiros agora</span>
          </motion.h1>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            Somos especialistas em defender seus direitos contra bancos que cobram abusivamente. 
            Já recuperamos milhares em restituições para nossos clientes.
          </motion.p>

          <motion.div className={styles.cta} variants={itemVariants}>
            <a href="https://wa.me/5531999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consultoria%20gratuita%20com%20a%20MAX." target="_blank" rel="noopener noreferrer">
              <button className={styles.btnPrimary}>
                ✓ Começar Consultoria
              </button>
            </a>
            <button className={styles.btnSecondary}>
              Saber mais
            </button>
          </motion.div>
        </motion.div>

        {/* Benefits floating cards - Right side */}
        <motion.div className={styles.benefits}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={styles.benefitCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                delay: 0.5 + index * 0.2,
                duration: 3 + index * 0.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              whileHover={{ y: -15, boxShadow: '0px 20px 40px rgba(72, 209, 204, 0.2)' }}
            >
              <div className={styles.benefitIcon}>{benefit.icon}</div>
              <div className={styles.benefitText}>
                <p className={styles.benefitLabel}>{benefit.label}</p>
                <p className={styles.benefitValue}>{benefit.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>↓</span>
      </motion.div>
    </section>
  );
}
