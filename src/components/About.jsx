import React from 'react';
import styles from './About.module.css';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaRocket, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>

        {/* LEFT SIDE */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>About Me</h2>

          <p className={styles.intro}>
            Hello! I'm <strong>Narendra Posa</strong>, a passionate full stack developer
            who loves building modern, scalable, and user-friendly applications.
          </p>

          <div className={styles.highlights}>
            <div>
              <h3>🎓 4+ Years</h3>
              <p>Learning & Building</p>
            </div>
            <div>
              <h3>💻 Full Stack</h3>
              <p>React • Node • Java</p>
            </div>
            <div>
              <h3>🚀 Projects</h3>
              <p>Real-world applications</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <FaUserGraduate className={styles.icon} />
            <h3>Education</h3>
            <p>B.Tech CSE – AITS Rajampet</p>
            <span>2021–2025 | 87%</span>
          </motion.div>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <FaLightbulb className={styles.icon} />
            <h3>What Drives Me</h3>
            <p>I enjoy solving problems and turning ideas into real applications.</p>
          </motion.div>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <FaRocket className={styles.icon} />
            <h3>My Goal</h3>
            <p>To become a top developer and build impactful scalable products.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
