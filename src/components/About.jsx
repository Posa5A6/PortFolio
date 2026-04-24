import React from 'react';
import styles from './About.module.css';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaRocket, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const data = [
    {
      icon: <FaUserGraduate />,
      title: "Education",
      desc: "B.Tech CSE – AITS Rajampet\n2021–2025 | 87%"
    },
    {
      icon: <FaLightbulb />,
      title: "What Drives Me",
      desc: "I enjoy solving problems and turning ideas into real applications."
    },
    {
      icon: <FaRocket />,
      title: "My Goal",
      desc: "To become a top developer and build impactful scalable products."
    }
  ];

  return (
    <section id="about" className={styles.about}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>

        <p className={styles.intro}>
          Hello! I'm <strong>Narendra Posa</strong>, a passionate full stack developer
          focused on building modern and impactful digital experiences.
        </p>

        <div className={styles.grid}>
          {data.map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
