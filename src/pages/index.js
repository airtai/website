import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { TypeAnimation } from 'react-type-animation';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import RobotFooterIcon from '@site/src/components/RobotFooterIcon';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroText}>True to our name*, we airt you through the world of</h1>
        <div className={styles.robotHeroContainer}>
          <h1 className={styles.robotHeroContainerHeader}>
              <TypeAnimation
              sequence={[
                'data ',
                3000,
                'AI ',
                3000,
                'predictions ',
                3000
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className={styles.heroTextAnimate}
              speed={{type: 'keyStrokeDelayInMs', value: 100}}
            />
          &nbsp;in motion</h1>
          <img className={styles.robotHero} src="img/robot-hero.svg" alt="robot-hero" />
        </div>
        <p className={styles.heroDescriptionText}><em>airt</em> is an AI-powered framework for streaming app development</p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--lg", styles.heroButton)}
            to="https://fastkafka.airt.ai">
              GET STARTED
          </Link>
        </div>
        <p className={styles.heroNotes}><em>*[airt; Scot. eyrt] to point out the way; direct; guide</em></p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.tagline}`}
      // title={`AI in motion`}
      description="airt website">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <RobotFooterIcon />
    </Layout>
  );
}
