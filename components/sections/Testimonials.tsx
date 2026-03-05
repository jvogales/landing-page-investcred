'use client';

import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

interface TestimonialItemProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  index: number;
}

const TestimonialItem = ({ name, role, content, avatar, index }: TestimonialItemProps) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      whileHover={{
        y: -8,
        boxShadow: '0px 20px 50px rgba(72, 209, 204, 0.15)',
      }}
    >
      <div className={styles.stars}>
        {'⭐'.repeat(5)}
      </div>
      <blockquote className={styles.quote}>{content}</blockquote>

      <div className={styles.author}>
        <div className={styles.avatar}>{avatar}</div>
        <div className={styles.authorInfo}>
          <h4 className={styles.name}>{name}</h4>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Beneficiária de INSS - RJ',
      content:
        'A MAX conseguiu recuperar mais de R$ 12 mil em descontos abusivos no meu cartão RMC. Processo rápido e muito transparente!',
      avatar: '👩',
    },
    {
      name: 'João Santos',
      role: 'Aposentado - SP',
      content:
        'Estava sofrendo descontos vitalícios há anos. Graças à equipe da MAX, consegui resolver isso em poucas semanas. Muito bom!',
      avatar: '👨',
    },
    {
      name: 'Ana Costa',
      role: 'Beneficiária de Auxílio - MG',
      content:
        'O atendimento foi humanizado e compreensivo. Eles realmente se importam com os clientes. Já recomendei pra minhas amigas.',
      avatar: '👩',
    },
    {
      name: 'Carlos Mendes',
      role: 'Pensionista - BA',
      content:
        'Excelente consultoria gratuita! Conseguiram identificar irregularidades que o banco tentava esconder. Muito profissional.',
      avatar: '👨',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>O que dizem nossos clientes?</h2>
          <p className={styles.subtitle}>
            Histórias reais de pessoas que recuperaram seus direitos financeiros com a MAX
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialItem
              key={index}
              {...testimonial}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
