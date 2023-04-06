import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { TypeAnimation } from 'react-type-animation';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageStayTuned from '@site/src/components/HomepageStayTuned';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroText}>True to our name*, we <em>airt</em> you through the world of</h1>
        <h1 className={styles.heroText}>
            <TypeAnimation
            sequence={[
              'data',
              3000,
              'AI',
              3000,
              'predictions',
              3000
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className={styles.heroTextAnimate}
            speed={{type: 'keyStrokeDelayInMs', value: 100}}
          />
         in motion</h1>
        <p className={styles.heroDescriptionText}><em>airt</em> is an open-source deep learning platform for streaming data</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/airtai">
              Get Started
          </Link>
        </div>
        <p className={styles.heroNotes}>*[airt; Scot. eyrt] to point out the way; direct; guide</p>
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
      <HomepageStayTuned />
    </Layout>
  );
}
