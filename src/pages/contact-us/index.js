import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';

import Form from '@site/src/components/Form';
import RobotFooterIcon from '@site/src/components/RobotFooterIcon';

import styles from './styles.module.css';

export default function Hello() {
  return (
    <Layout title="Contact" description="Contact">
      <section className={`hero hero--primary ${styles.containerWithMinHeight}`}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <p className={styles.header}>Contact us.</p>
          </div>
        </div>
        <div className={`${styles.description}`}>
          <p>Interested in airt but not sure where to start? Shoot us a message and we’ll be in touch shortly.</p>
          <Form />
        </div>
      </div>
    </section>
    <RobotFooterIcon />
    </Layout>
  );
}