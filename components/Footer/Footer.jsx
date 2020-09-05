import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  return <footer className={styles.footer}>Hobby Couple © {new Date().getFullYear()}</footer>;
};

export default Footer;
