import React, { useState } from 'react';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

function Form() {
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
export default Form;