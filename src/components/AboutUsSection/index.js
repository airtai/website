import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


export default function HomepageFeatures() {
  return (
    <section className="hero hero--primary">
      <div className="container">
        <div className="row">
          <div className={clsx('col col--6')}>
            <div className="text--left padding-horiz--md">
              <h2 className={styles.header}>Pointing out the</h2>
              <h2 className={styles.header}>future.</h2>
            </div>
          </div>
          <div className={clsx('col col--6')}>
            <div className={`text--left padding-horiz--md ${styles.description}`}>
              <p>True to our name*, we <em>airt</em> you through the world of AI. We <em>airt</em> you to the future. </p>
              <p>Our mission is to help you use the power of AI on your data in the simplest, easiest and quickest way. We bring you the power of deep learning & data science, without the need for data scientists. </p>
              <p className={styles.notes}>[ airt; Scot. eyrt ] to point out the way; direct; guide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
