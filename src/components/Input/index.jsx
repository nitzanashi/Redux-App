import * as styles from './index.module.css';
import React from 'react';

const Input = (props) => {
  return (
      <input
          className={styles.input}
          {...props}
      />

  );
};

export default Input
