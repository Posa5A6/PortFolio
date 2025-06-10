// src/components/Skills.jsx
import React from 'react';
import styles from './Skills.module.css';
import { motion } from 'framer-motion';
/*import {
  FaReact, FaJava, FaNodeJs, FaPython, FaHtml5,
  FaCss3Alt, FaJs, FaGithub, FaCode, FaCloud,
  FaDatabase, FaTools
} from 'react-icons/fa';
import {
  SiSpringboot, SiFlask, SiDjango, SiVercel,
  SiRender, SiNetlify
} from 'react-icons/si';
*/
const Skills = () => {
  const skills = [
    { icon: <FaReact />, name: 'React.js' },
    { icon: <FaJava />, name: 'Java / Spring Boot' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaPython />, name: 'Python / Flask / Django' },
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaDatabase />, name: 'MongoDB / SQL' },
    { icon: <FaGithub />, name: 'Git & GitHub' },
    { icon: <SiVercel />, name: 'Vercel' },
    { icon: <SiRender />, name: 'Render' },
    { icon: <SiNetlify />, name: 'Netlify' },
    { icon: <FaCode />, name: 'VS Code' },
    { icon: <FaTools />, name: 'NetBeans' },
  ];

  const half = Math.ceil(skills.length / 2);
  const firstRow = skills.slice(0, half);
  const secondRow = skills.slice(half);

  return (
    <section id="skills" className={styles.skills}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Technical Skills</h2>

        <div className={styles.rowWrapper}>
          <div className={`${styles.row} ${styles.row1}`}>
            {firstRow.map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                <div className={styles.icon}>{skill.icon}</div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.rowWrapper}>
          <div className={`${styles.row} ${styles.row2}`}>
            {secondRow.map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                <div className={styles.icon}>{skill.icon}</div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
