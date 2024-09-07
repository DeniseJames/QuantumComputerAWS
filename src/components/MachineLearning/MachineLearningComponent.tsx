import React from 'react';
import styles from './MachineLearningComponent.module.css';

const MachineLearningComponent: React.FC = () => {
  return (
    <section className={styles.machineLearningSection}>
      <h2 className={styles.heading}>Machine Learning Products and Services</h2>
      <div className={styles.products}>
        <div className={styles.product}>
          <h3>AI and Machine Learning Data Reports</h3>
          <p>Comprehensive data reports to help you make informed decisions using AI and machine learning insights.</p>
        </div>
        <div className={styles.product}>
          <h3>LLM Research</h3>
          <p>Leading research in large language models to enhance your business capabilities.</p>
        </div>
        <div className={styles.product}>
          <h3>Custom Machine Learning Solutions</h3>
          <p>Tailored machine learning solutions to meet your specific business needs.</p>
        </div>
        <div className={styles.product}>
          <h3>Training and Workshops</h3>
          <p>Expert-led training sessions and workshops to upskill your team in machine learning and AI.</p>
        </div>
      </div>
    </section>
  );
}

export default MachineLearningComponent;
