import React from 'react';
import styles from './Image.module.css';

const Image = ({ className, alt, src}) => {
  return (
    <div className={styles.imageContainer}>
      <img
        className={className ? className : styles.image}
        alt={alt}
        src={src}
      />
    </div>
  )
}

export default Image;
