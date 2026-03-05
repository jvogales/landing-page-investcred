'use client';

import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="sobre" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={styles.text}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className={styles.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Sobre a MAX ASSESSORIA
            </motion.h2>

            <p className={styles.description}>
              A MAX ASSESSORIA é uma empresa especializada em consultoria jurídica e
              intermediação de negócios financeiros, atuando com foco na defesa dos
              direitos de beneficiários de programas do governo que enfrentam
              irregularidades em seus contratos com instituições bancárias.
            </p>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Missão da empresa</h3>
              <p className={styles.sectionText}>
                Proteger e defender os direitos dos cidadãos que foram lesados por
                instituições financeiras, promovendo justiça, transparência e dignidade
                por meio de uma intermediação ética, eficaz e humanizada.
              </p>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Nossa visão</h3>
              <p className={styles.sectionText}>
                Ser reconhecida nacionalmente como referência em intermediação de soluções
                jurídicas voltadas à proteção de beneficiários de programas sociais,
                contribuindo para um sistema financeiro mais justo e acessível.
              </p>
            </div>
          </motion.div>

          <motion.div
            className={styles.imageSection}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={styles.imageTitle}>Nossa sede</h3>
            <div className={styles.imageLine}></div>
            <div className={styles.imagePlaceholder}>
              <div className={styles.placeholderContent}>
                <span>Jacarezinho / PR</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
