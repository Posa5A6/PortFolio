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

        {/* MAIN SPLIT */}
        <div className={styles.wrapper}>

          {/* LEFT SIDE (BIG STATS) */}
          <div className={styles.left}>
            <div className={styles.highlightCard}>
              <h3>🎓 4+ Years</h3>
              <p>Learning & Building</p>
            </div>

            <div className={styles.highlightCard}>
              <h3>💻 Full Stack</h3>
              <p>React • Node • Java</p>
            </div>

            <div className={styles.highlightCard}>
              <h3>🚀 Projects</h3>
              <p>Real-world applications</p>
            </div>
          </div>

          {/* RIGHT SIDE (CARDS) */}
          <div className={styles.right}>
            {data.map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                whileHover={{ y: -6 }}
              >
                <div className={styles.icon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default About;
