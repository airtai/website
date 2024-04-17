import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "MASTER COMPLEXITY WITH SYNERGY",
    // Svg: require('@site/static/img/dev-tool-for-data-in-motion.svg').default,
    src: "img/Robot_Yes_No_transparent.svg",
    description: (
      <>Harness collective intelligence for problem-solving efficiency.</>
    ),
  },
  {
    title: "FLEXIBLE, SCALABLE INTEGRATION",
    // Svg: require('@site/static/img/bleeding-edge-technology.svg').default,
    src: "img/Robot_winner_transparent.svg",
    description: <>Create and integrate specialized AI agents seamlessly.</>,
  },
  {
    title: "EFFORTLESS MULTI-AGENT DEPLOYMENT",
    // Svg: require('@site/static/img/driving-impact-with-deep-learning.svg').default,
    src: "img/bleeding-edge-technology.svg",
    description: <>Easily launch distributed multi-agent systems.</>,
  },
];

function Feature({ src, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img
          className={
            src === "img/Robot_winner_transparent.svg"
              ? styles.featureSvgAutoWidth
              : styles.featureSvg
          }
          src={src}
        />
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
        <div className={`row ${styles.featureContainerWrapper}`}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
