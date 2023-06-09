import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import RobotFooterIcon from '@site/src/components/RobotFooterIcon';

import styles from './styles.module.css';

export default function Hello() {
  return (
    <Layout title="Company information" description="Company information">
      <section className={clsx("hero hero--primary", styles.sectionContainer)}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className={styles.header}>Company information</h2>
          </div>
        </div>
        <div className="text--left">
          <p className={styles.reducedLineHeight}><span className={styles.bold}>Company:</span> airt technologies d.o.o. </p>
          <p className={styles.reducedLineHeight}><span className={styles.bold}>Address:</span> Vladimira Nazora 16, HR-10000 Zagreb, Croatia</p>
          <p className={styles.reducedLineHeight}><span className={styles.bold}>OIB:</span> 18367329060</p>
          <p className={styles.reducedLineHeight}><span className={styles.bold}>VAT ID:</span> HR18367329060</p>
          <p className={styles.reducedLineHeight}><span className={styles.bold}>MBS:</span> 081252442</p>
          <p className={styles.reducedLineHeight}><span className={styles.bold}>Bank:</span> Zagrebačka banka d.d., Trg bana Josipa Jelačića 10. Zagreb, Croatia</p>
          <p className={styles.reducedLineHeight}><span className={styles.bold}>IBAN:</span> HR7823600001102796234 </p>
          <p className={styles.reducedLineHeight}><span className={styles.bold}>SWIFT:</span> ZABAHR2X </p>
          <p className={styles.reducedLineHeight}><span className={styles.bold}>Equity capital:</span> 20,000 HRK (paid-in-full) </p>
          <p className={styles.reducedLineHeight}><span className={styles.bold}>Management board:</span> Hajdi Ćenan & Davor Runje</p>
        </div>
      </div>
    </section>
    <RobotFooterIcon />
    </Layout>
  );
}