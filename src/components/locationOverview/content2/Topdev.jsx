import React from 'react';
import styles from './topdev.module.css';
import Devcard from './Devcard';

function Topdev({ numberOfCards = 6, gap = '8px' }) {
  const topdevStyle = {
    '--gap': gap
  };

  return (
    <div className={styles.topdev} style={topdevStyle}>
      {Array.from({ length: numberOfCards }).map((_, index) => (
        <Devcard key={index} imgSrc="/property/developerLogo.webp" />
      ))}
    </div>
  );
}

export default Topdev;
