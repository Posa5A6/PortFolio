import React from 'react';
import styles from './About.module.css';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaRocket, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const cards = [
    {
      icon: <FaUserGraduate />,
      title: "Education",
      content: (
        <>
          <p><strong>B.Tech CSE</strong><br />AITS Rajampet<br />2021–2025 | 87%</p>
          <p><strong>Intermediate</strong><br />JCNRM<br />94.3%</p>
          <p><strong>SSC</strong><br />SRK EM School<br />10 CGPA</p>
        </>
      )
    },
    {
      icon: <FaLightbulb />,
      title: "What Drives Me",
      content: (
        <p>
          I love turning ideas into real-world applications. I enjoy coding,
          problem-solving, and building clean, efficient, user-friendly systems.
        </p>
      )
    },
    {
      icon: <FaRocket />,
      title: "My Goal",
      content: (
        <p>
          To grow as a full stack developer and contribute to impactful,
          scalable applications while constantly learning new technologies.
        </p>
      )
    }
  ];

  return (
    <section id="about" className={styles.about}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>

        <p className={styles.intro}>
          Hello! I'm <strong>Narendra Posa</strong>, a passionate full stack developer
          focused on building modern and impactful digital experiences.
        </p>

        <div className={styles.cardContainer}>
          {cards.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              whileHover={{ scale: 1.1 }}
            >
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <div className={styles.cardContent}>{item.content}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
