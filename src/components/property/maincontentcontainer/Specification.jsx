'use client'

import { useState } from 'react'
import styles from './specification.module.css'

function Specification(props) {

    const parking = props.specificationData.Parking
    const interior = props.specificationData.Interior

    const [readMore, setReadMore] = useState(false)

    return (
      <div className={styles.specificationContainer}>
          <div className={styles.specificationSubContainer}>
              <h3>Parking</h3>
              <div className={styles.specificationSubContainerContent}>
                  <div className={styles.specificationSubContainerDataBlock}>
                      <h4>Parking Information</h4>
                      <ul>
                        {parking.parkingInfo.map((dt,index)=>(
                            <li key={index}>{dt}</li>
                        ))}
                      </ul>
                  </div>
              </div>
          </div>
          <div className={styles.specificationSubContainer}>
              <h3>Interior</h3>
              <div className={styles.specificationSubContainerContent}>
                <div className={styles.specificationSubContainerDataBlock}>
                    <h4>Virtual Tour</h4>
                    <ul>
                        {interior.virtualTour.map((dt,index)=>(
                            <li key={index}>{dt}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.specificationSubContainerDataBlock}>
                    <h4>Bathroom Information</h4>
                    <ul>
                        {interior.bathroomInfo.map((dt,index)=>(
                            <li key={index}>{dt}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.specificationSubContainerDataBlock}>
                    <h4>Bedroom Information</h4>
                    <ul>
                        {interior.bedroomInfo.map((dt,index)=>(
                            <li key={index}>{dt}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.specificationSubContainerDataBlock}>
                    <h4>Room Information</h4>
                    <ul>
                        {interior.room1Info.map((dt,index)=>(
                            <li key={index}>{dt}</li>
                        ))}
                    </ul>
                </div>
               
               {
               readMore &&  
               <>
                <div className={styles.specificationSubContainerDataBlock}>
                    <h4>Room Information</h4>
                    <ul>
                        {interior.room2Info.map((dt,index)=>(
                            <li key={index}>{dt}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.specificationSubContainerDataBlock}>
                    <h4>Room Information</h4>
                    <ul>
                        {interior.room3Info.map((dt,index)=>(
                            <li key={index}>{dt}</li>
                        ))}
                    </ul>
                </div>
               <div className={styles.specificationSubContainerDataBlock}>
                    <h4>Room Information</h4>
                    <ul>
                        {interior.room4Info.map((dt,index)=>(
                            <li key={index}>{dt}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.specificationSubContainerDataBlock}>
                    <h4>Room Information</h4>
                    <ul>
                        {interior.room5Info.map((dt,index)=>(
                            <li key={index}>{dt}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.specificationSubContainerDataBlock}>
                    <h4>Room Information</h4>
                    <ul>
                        {interior.room6Info.map((dt,index)=>(
                            <li key={index}>{dt}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.specificationSubContainerDataBlock}>
                    <h4>Room Information</h4>
                    <ul>
                        {interior.room7Info.map((dt,index)=>(
                            <li key={index}>{dt}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.specificationSubContainerDataBlock}>
                    <h4>Additional rooms Information</h4>
                    <ul>
                        {interior.addRoomInfo.map((dt,index)=>(
                            <li key={index}>{dt}</li>
                        ))}
                    </ul>
                </div>

                
                <div className={styles.specificationSubContainerDataBlock}>
                    <h4>Interior Features</h4>
                    <ul>
                        {interior.interiorFeatures.map((dt,index)=>(
                            <li key={index}>{dt}</li>
                        ))}
                    </ul>
                </div>
              </>
                }
                <span className='text-blue-700 font-semibold border-b border-b-blue-700 inline pb-2   hover:text-blue-300 transition-all text-lg hover:cursor-pointer' onClick={() => setReadMore(prev => !prev)}>
                    Read {readMore ? 'Less': 'More'}
                </span>
              </div>
          </div>
      </div>
    )
}

export default Specification