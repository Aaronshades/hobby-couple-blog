import React from 'react';

import styles from './Button.module.css';

const Button = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {label}
    </button>
  );
};

export default Button;
