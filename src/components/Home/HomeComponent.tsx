import React from 'react';
import { Link } from 'react-router-dom';
import MachineLearningComponent from '../MachineLearning/MachineLearningComponent';
import WebDesignComponent from '../WebDesign/WebDesignComponent';
import TrainingComponent from '../Training/TrainingComponent';
import styles from './HomeComponent.module.css';

const HomeComponent: React.FC = () => {
  return (
    <main className={styles.home}>
      <header className={styles.header}>
        <h1>Welcome to Quantum Computer Learning</h1>
        <p>Your one-stop solution for comprehensive nmachine learning, web design, and training services.</p>
      </header>
      <section className={styles.section}>
        <MachineLearningComponent />
      </section>
      <section className={styles.section}>
        <WebDesignComponent />
      </section>
      <section className={styles.section}>
        <TrainingComponent />
      </section>
      <section className={styles.testimonials}>
        <h2 className="mb-4">What Our Clients Say About Us on Linkedin</h2>
        <div className={styles.testimonialList}>
          <blockquote className={styles.testimonial}>
            <p className="fst-italic, mb-3">"Denise James worked in my department at Honda R&D, providing software integration and data management services to engine, emission control, and electrical departments during 2013 and 2014. Denise is highly capable and knowledgeable about system integration and vehicle control software, and she provided extraordinary support across departments to a diverse group of engineers. She chaired weekly meetings with sub-system engineers to keep software development on schedule and to ensure accurate data for software release. Furthermore, she regularly found areas for process improvement and suggested effective countermeasures for improving data accuracy and work efficiency. I would not hesitate to work with Denise again, and I can unequivocally recommend her based on quality of work and tenacity towards goals."</p>
            <footer className="fw-bold">- Richard Owens, Manager at Honda Research and Development</footer>
          </blockquote>
          <blockquote className={styles.testimonial}>
            <p className="fst-italic">"Denise James was my colleague at Honda Research and Development. We worked together constantly at work on vehicle software integration. Denise is one out of five people in the country that can do the vehicle software integration she does. Denise was tenacious and extremely knowledgeable about system vehicle software. She chaired an efficient weekly meeting with sub system engineers to release accurate software quickly. She kept the team on task with electronic vehicle software schedules on a shared secure location. I will never forget the time another team member was unavailable for an issue with the software in a vehicle launch. Denise stepped up to communicate the concern with the supplier in Japan to release updated software within twelve hours to keep the vehicle launch on time. I highly recommend Denise and would enjoy working with her again."</p>
            <footer className="fw-bold">- Timothy Dixon, Senior Systems Engineer at Honda Research and Development</footer>
          </blockquote>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>Contact us today to learn more about how we can help your business grow. <Link to="/contact">Contact Us</Link> to learn more about the above services offered.</p>
      </footer>
      <a href="https://www.linkedin.com/in/deniserjames/" target="_blank" rel="noopener noreferrer" className="ms-2">
        <i className="fab fa-linkedin"></i>
      </a>
    </main>
  );
}

export default HomeComponent;
