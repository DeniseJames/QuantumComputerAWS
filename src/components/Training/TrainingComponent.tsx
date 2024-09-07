import React from 'react';
import styles from './TrainingComponent.module.css';

const TrainingComponent: React.FC = () => {
  return (
    <section className={styles.trainingSection}>
      <h2 className={styles.heading}>Training and Teaching Services</h2>
      <p>Quantum Computer Services offers comprehensive training and teaching services in the following areas:</p>
      <div className={styles.skills}>
        <div className={styles.skill}>
          <h3>Data Science</h3>
          <p>Python, C++, SQL, noSQL, TensorFlow, PyTorch, Scikit-learn, Pandas, Numpy</p>
        </div>
        <div className={styles.skill}>
          <h3>Full Stack Deployment</h3>
          <p>React, Typescript, Vite, AWS</p>
        </div>
        <div className={styles.skill}>
          <h3>Data Visualization</h3>
          <p>Power BI, Excel</p>
        </div>
        <div className={styles.skill}>
          <h3>Computer Science</h3>
          <p>Python, C++, C#</p>
        </div>
      </div>
          </section>
  );
}

export default TrainingComponent;
