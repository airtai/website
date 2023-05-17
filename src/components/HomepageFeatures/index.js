import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'DEV TOOL FOR DATA IN MOTION',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Efficient and scalable framework that allows developers to create, test, and 
        manage microservices for streaming data with ease.
      </>
    ),
  },
  {
    title: 'BLEEDING EDGE TECHNOLOGY',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Incorporated GPT-based model that predicts future events to be streamed, and outperforms 
        all other alternatives (SOTA results against IBM and Google).
      </>
    ),
  },
  {
    title: 'DRIVING IMPACT WITH DEEP LEARNING',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Our model can be used for both standard business predictive analytics and automatic 
        regression and stress testing of the system.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
