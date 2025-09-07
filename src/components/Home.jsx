import React from 'react';
import styles from './Home.module.css';
import { motion } from 'framer-motion';
import profileImage from './image.png'; // Make sure path is correct relative to this file

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const buttonHover = {
  scale: 1.05,
  boxShadow: '0 0 15px #00ffcc',
  transition: { duration: 0.3 },
};

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.textArea} variants={itemVariants}>
          <h1 className={styles.heading}>
            Hi, I'm <span className={styles.gradientText}>Narendra</span>
          </h1>
          <p className={styles.subheading}>
            Full Stack Developer | React | Java | Python
          </p>

          <div className={styles.buttonsContainer}>
            <motion.a
              href="/Narendra_Posa_latest.pdf"
              download="Narendra_Posa_latest.pdf"
              className={styles.button}
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>

            <motion.a
              href="#projects"
              className={`${styles.button} ${styles.secondaryButton}`}
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>

        <motion.div className={styles.imageArea} variants={itemVariants}>
          <motion.img
            src={profileImage}
            alt="Narendra"
            className={styles.profileImage}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
