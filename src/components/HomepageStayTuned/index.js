import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import Form from '../Form';

import styles from './styles.module.css';

export default function HomepageStayTuned() {
  return (
    <section className={clsx('hero hero--primary')}>
      <div className="container">
        <div className={clsx('col col--12')}>
          <p className={styles.title}>Stay tuned</p>
        </div>
        <div className={clsx('col col--12')}>
          <p className={styles.description}>Don’t miss a thing. Sign up with your email address to receive news and updates.</p>
        </div>
        <div className={clsx('col col--12', styles.form)}>
        <Form />
        </div>
      </div>
    </section>
  );
}
