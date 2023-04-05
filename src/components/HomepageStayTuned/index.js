import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import Form from '../Form';

import styles from './styles.module.css';

function Submit() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting value: ${inputValue}`);
    // Perform any actions you need to with the input value
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input className={styles.formInput} placeholder="email" type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <Link to="#" className="button button--secondary button--lg" onClick={handleSubmit}>
        Dummy button
      </Link>
    </form>
  );
}

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
