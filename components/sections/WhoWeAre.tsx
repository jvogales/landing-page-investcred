'use client';

import { motion } from 'framer-motion';
import styles from './WhoWeAre.module.css';

interface InfoBlockProps {
  title: string;
  description: string;
  index: number;
}

const InfoBlock = ({ title, description, index }: InfoBlockProps) => {
  return (
    <motion.div
      className={styles.block}
      initial={false}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: 'easeOut'
      }}
    >
      <div className={styles.blockContent}>
        <h3 className={styles.blockTitle}>{title}</h3>
        <p className={styles.blockText}>{description}</p>
      </div>
      <div className={styles.blockAccent}></div>
    </motion.div>
  );
};

export default function WhoWeAre() {
  const blocks = [
    {
      title: 'Sobre a MAX ASSESSORIA',
      description: 'A MAX ASSESSORIA é uma empresa especializada em consultoria jurídica e intermediação de negócios financeiros, atuando com foco na defesa dos direitos de beneficiários de programas do governo que enfrentam irregularidades em seus contratos com instituições bancárias.',
    },
    {
      title: 'Missão da empresa',
      description: 'Proteger e defender os direitos dos cidadãos que foram lesados por instituições financeiras, promovendo justiça, transparência e dignidade por meio de uma intermediação ética, eficaz e humanizada.',
    },
    {
      title: 'Nossa visão',
      description: 'Ser reconhecida nacionalmente como referência em intermediação de soluções jurídicas voltadas à proteção de beneficiários de programas sociais, contribuindo para um sistema financeiro mais justo e acessível.',
    },
  ];

  return (
    <section id="sobre" className={styles.whoWeAre}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className={styles.title}>Quem Somos</h2>
          <div className={styles.titleUnderline}></div>
        </motion.div>

        <div className={styles.blocksContainer}>
          {blocks.map((block, index) => (
            <InfoBlock key={index} {...block} index={index} />
          ))}
        </div>

        <motion.div
          className={styles.values}
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={styles.valueItem}>
            <div className={styles.valueIcon}>💼</div>
            <h3 className={styles.valueName}>Ética</h3>
            <p className={styles.valueDesc}>Agimos com total transparência e honestidade em todas as nossas ações</p>
          </div>
          <div className={styles.valueItem}>
            <div className={styles.valueIcon}>⚖️</div>
            <h3 className={styles.valueName}>Justiça</h3>
            <p className={styles.valueDesc}>Lutamos pela proteção e defesa dos direitos de nossos clientes</p>
          </div>
          <div className={styles.valueItem}>
            <div className={styles.valueIcon}>❤️</div>
            <h3 className={styles.valueName}>Humanidade</h3>
            <p className={styles.valueDesc}>Entendemos as dificuldades e oferecemos atendimento humanizado</p>
          </div>
        </motion.div>
      </div>

      <div className={styles.backgroundAccent}></div>
    </section>
  );
}
