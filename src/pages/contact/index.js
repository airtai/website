import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';

import Form from '@site/src/components/Form';

import styles from './styles.module.css';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <section className={`hero hero--primary ${styles.containerWithMinHeight}`}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <p className={styles.header}>Contact us.</p>
          </div>
        </div>
        <div className={`text--center padding-horiz--md ${styles.description}`}>
          <p>Contact us to find out more about how AI and deep learning can help your company.</p>
          <Form />
        </div>
      </div>
    </section>
    </Layout>
  );
}