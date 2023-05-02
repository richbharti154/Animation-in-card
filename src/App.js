import React, { useState } from 'react';
import styles from './Card.module.css';

const Image = ({ src, alt }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div className={styles.imageContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img className={`${styles.image} ${hovered ? styles.zoom : ''}`} src={src} alt={alt} />
    </div>
  );
};

export default Image;
