'use client';

import { motion } from 'framer-motion';
import styles from './Services.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, tags, icon }: ServiceCardProps) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.tags}>
        {tags.map((tag, i) => (
          <div key={i}>
            {i > 0 && <span className={styles.dot}>•</span>}
            <span className={styles.tag}>{tag}</span>
          </div>
        ))}
      </div>

      <div className={styles.lines}>
        <div className={styles.line} />
        <div className={styles.line} />
      </div>

      <p className={styles.description}>{description}</p>
    </motion.div>
  );
};

export default function Services() {
  const services = [
    {
      title: 'Análise de Contratos RMC',
      description:
        'Analisamos contratos de cartões RMC (Reserva de Margem Consignável) contratados sem conhecimento ou autorização clara. Identificamos descontos abusivos e vitalícios em benefícios.',
      tags: ['Especializado', 'Eficaz'],
      icon: '📋',
    },
    {
      title: 'Intermediação Jurídica',
      description:
        'Conectamos você a um grupo de advogados especializados para entrar com ações judiciais contra bancos responsáveis por cobranças indevidas em benefícios governamentais.',
      tags: ['Advogados', 'Especializados'],
      icon: '⚖️',
    },
    {
      title: 'Atendimento Personalizado',
      description:
        'Nossa atuação é principalmente por telemarketing, alcançando clientes em diversas regiões de forma ágil e personalizada, garantindo atendimento humanizado.',
      tags: ['Telemarketing', 'Ágil'],
      icon: '📞',
    },
  ];

  return (
    <section id="servicos" className={styles.services}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className={styles.title}>Especialistas em intermediação jurídica e financeira</h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
