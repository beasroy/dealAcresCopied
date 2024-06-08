'use client'
import React, { useState } from 'react';
import styles from './faq.module.css';
import Faqcard from './Faqcard.jsx';

function FAQ(props) {
  const [displayCount, setDisplayCount] = useState(7);
  const faqDataToDisplay = props.faqdata.slice(0, displayCount);

  const toggleDisplay = () => {
    if (displayCount === 7) {
      setDisplayCount(props.faqdata.length);
    } else {
      setDisplayCount(7);
    }
  };

  return (
    <div className={styles.faqContainer}>
      {faqDataToDisplay.map((dt, index) => (
        <Faqcard key={index} cardData={dt} />
      ))}
      <p onClick={toggleDisplay}>
        {displayCount === 7 ? 'Load more' : 'Load less'}
      </p>
    </div>
  );
}

export default FAQ;
