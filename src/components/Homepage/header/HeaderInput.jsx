import React, { useState, useEffect, useRef } from 'react';
import styles from './header.module.css';

const HeaderInput = (props) => {
  const [typingIndex, setTypingIndex] = useState(0);
  const [categoryChanged, setCategoryChanged] = useState(false);
  const [selectedResedential, setSelectedResedential] = useState('');
  const [selectedLocation,setSelectedLocation]=useState('');
  const placeholderText = `${props.type} properties in your area.....`;
  const animationDelay = 75; 


  const prevCategoryRef = useRef();

  useEffect(() => {

    if (prevCategoryRef.current !== props.type) {
      setTypingIndex(0);
      setCategoryChanged(true);
    }
    
    prevCategoryRef.current = props.type;

    if (categoryChanged) {
      
      const intervalId = setInterval(() => {
        setTypingIndex((prevIndex) => prevIndex + 1);
      }, animationDelay);

      
      setTimeout(() => {
        clearInterval(intervalId);
        setCategoryChanged(false); 
      }, animationDelay * placeholderText.length + animationDelay);
    }
  }, [props.type, categoryChanged, animationDelay, placeholderText.length]);

  const placeholder = placeholderText.slice(0, typingIndex);

  
  const handleResedentialChange = (e) => {
    setSelectedResedential(e.target.value);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  return (
    <div className={styles.HeaderContentInput}>
      <div className={styles.LocationDropdown}>
      <select className='text-base'   value={selectedLocation} onChange={handleLocationChange}>
        <option className='text-base'  >All Location</option>
          <option className='text-md' value="Gurugaon">Gurugaon</option>
          <option className='text-md' value="Delhi">Delhi</option>
          <option className='text-md' value="Mumbai">Mumbai</option>
        </select>
        <div className='w-2 border-r-4'></div>
        <select className='text-base'   value={selectedResedential} onChange={handleResedentialChange}>
        <option className='text-base'  >All Residential</option>
          <option className='text-md' value="Gurugaon">Gurugaon</option>
          <option className='text-md' value="Delhi">Delhi</option>
          <option className='text-md' value="Mumbai">Mumbai</option>
        </select>
      </div>
      <div className='w-2 border-r-4'></div>
      <input type='email' placeholder={placeholder} />
      <button type='button'>Get Started</button>
    </div>
  );
};

export default HeaderInput;