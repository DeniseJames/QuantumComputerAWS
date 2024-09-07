import React from 'react';
import styles from './WebDesignComponent.module.css';

const WebDesignComponent: React.FC = () => {
  return (
    <section className={styles.webDesignSection}>
      <h2 className={styles.heading}>End-to-End Web Design Services</h2>
      <p>At Quantum Computer Learning, we provide comprehensive full stack web design services tailored to meet your business needs. Our expertise includes:</p>
      <div className={styles.services}>
        <article className={styles.service}>
          <h3>Front-End Development</h3>
          <p>Using React, we create dynamic and responsive user interfaces that provide an exceptional user experience.</p>
        </article>
        <article className={styles.service}>
          <h3>Back-End Development</h3>
          <p>We choose the backend technology that best suits your requirements, whether it's Node.js, Python, or another robust solution.</p>
        </article>
        <article className={styles.service}>
          <h3>Hosting on AWS</h3>
          <p>Our hosting solutions on AWS ensure scalability, reliability, and security for your web applications.</p>
        </article>
        <article className={styles.service}>
          <h3>Database Integration</h3>
          <p>We integrate front-end and back-end technologies to deliver a cohesive and efficient database application.</p>
        </article>
      </div>
    </section>
  );
}

export default WebDesignComponent;
