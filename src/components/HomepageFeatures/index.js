import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'DEV TOOL FOR DATA IN MOTION',
    // Svg: require('@site/static/img/dev-tool-for-data-in-motion.svg').default,
    src: '/img/dev-tool-for-data-in-motion.svg',
    description: (
      <>
        Efficient and scalable framework that allows developers to create, test, and 
        manage microservices for streaming data with ease.
      </>
    ),
  },
  {
    title: 'BLEEDING EDGE TECHNOLOGY',
    // Svg: require('@site/static/img/bleeding-edge-technology.svg').default,
    src: '/img/bleeding-edge-technology.svg',
    description: (
      <>
        Incorporated GPT-based model that predicts future events to be streamed, and outperforms 
        all other alternatives (SOTA results against IBM and Google).
      </>
    ),
  },
  {
    title: 'DRIVING IMPACT WITH DEEP LEARNING',
    // Svg: require('@site/static/img/driving-impact-with-deep-learning.svg').default,
    src: '/img/driving-impact-with-deep-learning.svg',
    description: (
      <>
        Our model can be used for both standard business predictive analytics and automatic 
        regression and stress testing of the system.
      </>
    ),
  },
];

function Feature({src, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={src} />
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className={styles.featureContainer}>
        <h3 className={styles.featureHeader}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* <div className={clsx('col col--12')}>
          <p className={styles.title}>Placeholder Title</p>
        </div>
        <div className={clsx('col col--12')}>
          <p className={styles.description}>Some very long placeholder description for airt.........................................</p>
        </div> */}
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
