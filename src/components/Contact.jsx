import React from 'react';
import styles from './Contact.module.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Twitter (X)

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Let's Connect</h2>

      <p className={styles.message}>
        🚀 <strong>Let’s Build the Future Together!</strong><br />
        Passionate about tech and innovation? So am I!<br />
        Let’s collaborate on exciting projects, push our limits, and turn great ideas into real-world solutions.<br />
        Whether you're into web dev, backend, cloud, or just love solving problems —<br />
        <span className={styles.highlight}>Connect with me and let’s grow our skills together!</span>
      </p>

      <div className={styles.icons}>
        <a
          href="https://www.linkedin.com/in/narendra-posa-421067254"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Posa5A6"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:narisnarendras6@gmail.com"
          title="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="tel:+919014293910"
          title="Phone"
        >
          <FaPhone />
        </a>
        <a
          href="https://x.com/NarendraTheKin1"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter (X)"
        >
          <FaXTwitter />
        </a>
      </div>
    </section>
  );
};

export default Contact;
