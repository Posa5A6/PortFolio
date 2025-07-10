import React from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    name: 'Patient Medical Data Connect System (PMDCS) in India using Cloud Computing',
    description:
      'A cloud-based MERN stack system centralizing patient medical data across India to improve healthcare efficiency.',
    tech: 'MERN Stack, Cloud Computing',
    github: 'https://github.com/Posa5A6/PMDCS',
    demo: '',
  },
  {
    name: 'Bike Rental Portal',
    description:
      'Online platform for renting bikes, built with Flask backend and frontend using HTML, CSS, and JavaScript.',
    tech: 'HTML, CSS, JavaScript, Flask, MongoDB',
    github: 'https://github.com/Posa5A6/BikeRentalPortal',
    demo: 'https://bikerentalportal.onrender.com',
  },
  {
    name: 'Library Management System',
    description: 'Desktop application to manage library operations using Java and JDBC.',
    tech: 'Java, JDBC',
    github: 'https://github.com/Posa5A6/Libraray-Management-System-using-java-and-jdbc',
    demo: '',
  },
  {
    name: 'Book Share App',
    description: 'A full-stack MERN web application where users can upload, search, and explore books.',
    tech: 'React, Node.js, Express, MongoDB, Netlify, Render',
    github: 'https://github.com/Posa5A6/book-share-app',
    demo: 'https://book-share-app.netlify.app/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              {/* Front Side */}
              <div className={styles.flipCardFront}>
                <h3>{project.name}</h3>
              </div>

              {/* Back Side */}
              <div className={styles.flipCardBack}>
                <p>{project.description}</p>
                <p>
                  <strong>Tech Stack:</strong> {project.tech}
                </p>
                <div className={styles.links}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
