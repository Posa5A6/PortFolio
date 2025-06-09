import React from 'react';
import styles from './About.module.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>

        <p className={styles.intro}>
          Hello! I'm <strong>Narendra Posa</strong>, a highly motivated and detail-oriented full stack developer passionate about building impactful digital experiences.
        </p>

        <div className={styles.section}>
          <h3>🎓 Education</h3>
          <ul className={styles.timeline}>
            <li>
              <strong>B.Tech in Computer Science & Engineering</strong><br />
              Annamacharya Institute of Technology & Sciences (AITS), Rajampet<br />
              <span className={styles.highlight}>2021 – 2025</span> | <span className={styles.highlight}>87%</span>
            </li>
            <li>
              <strong>Intermediate (MPC)</strong><br />
              JCNRM Junior College<br />
              <span className={styles.highlight}>2019 – 2021</span> | <span className={styles.highlight}>94.3%</span>
            </li>
            <li>
              <strong>SSC</strong><br />
              SRK EM School<br />
              <span className={styles.highlight}>2018 – 2019</span> | <span className={styles.highlight}>10 CGPA</span>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>💼 What Drives Me</h3>
          <p>
            I am passionate about turning ideas into user-centric applications. I love coding, problem-solving, and continuously improving my skills through real-world projects.
            Whether it’s front-end UI design or back-end development, I take pride in building software that’s clean, efficient, and reliable.
          </p>
        </div>

        <div className={styles.section}>
          <h3>🚀 My Goal</h3>
          <p>
            To contribute meaningfully to the tech world by delivering quality applications and always staying curious and adaptable in this ever-evolving field.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
