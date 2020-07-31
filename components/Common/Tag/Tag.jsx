import React from 'react';
import styles from './Tag.module.css';

const Tag = ({ tag, tagType }) => {
  switch (tagType) {
    case 'knitting':
      return (
        <div className={styles.knitting}>
          <p>{`#${tag}`}</p>
        </div>
      );
    case 'painting':
      return (
        <div className={styles.painting}>
          <p>{`#${tag}`}</p>
        </div>
      );
    case 'blog':
      return (
        <div className={styles.blog}>
          <p>{`#${tag}`}</p>
        </div>
      );
    default:
      return null;
  }
};

export default Tag;
