'use client';
import React, { useState} from 'react';
import styles from './postercard.module.css';
import Image from 'next/image';
import Modal from './Modal'; 



const Postercard = (props) => {
   
   

    // const [showInputField, setShowInputField] = useState(false);
    const [showModal, setShowModal] = useState(false);
    

    const openPopup = () => {
        if (props.buttontext === "Find a Home") {
            setShowModal(true);
        }else {
            window.location.href = '/propertylisting';
        }
    };


    const closePopup = () => {
        // setShowInputField(false);
        setShowModal(false);
    };

    return (
        <div className={styles.postercardContainer}>
            <div className={styles.imgContainer}>
                <Image
                    src={props.src}
                    alt={props.alt}
                    className={styles.img}
                />
            </div>
            <div className={styles.sideContent}>
                <div className={styles.title}>{props.title}</div>
                <p>{props.sidecontent1}</p>
                <h3>{props.sidecontent2}</h3>
                <span><h4>{props.sidecontent4}<span>{props.s2spantext}</span></h4></span>
                <h6>{props.sidecontent3}</h6>
                {showModal && (
                    <Modal onClose={closePopup} />
                       
                )}
                {/* {showInputField && (
                    <div className={styles.inputField}>
                        <input placeholder={props.buttontext} />
                        <button className={styles.btn2}>Submit</button>
                    </div>
                )} */}
              
                    <button className={styles.btn1} onClick={openPopup}>{props.buttontext}</button>
               
            </div>
        </div>
    );
};

export default Postercard;
