import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--6')}>
            <div className="text--left padding-horiz--md">
              <p className={styles.header}>Pointing out the<br/>future.</p>
            </div>
          </div>
          <div className={clsx('col col--6')}>
            <div className="text--left padding-horiz--md">
              <p>True to our name*, we <em>airt</em> you through the world of AI. We <em>airt</em> you to the future. </p>
              <p>Our mission is to help you use the power of AI on your data in the simplest, easiest and quickest way. We bring you the power of deep learning & data science, without the need for data scientists. </p>
              <br />
              <br />
              <p>[ airt; Scot. eyrt ] to point out the way; direct; guide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
