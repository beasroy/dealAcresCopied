"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import styles from "./expert.module.css"
import { Rating } from '@mui/material';

const ExpertLayout = (props) => {
    const [fvt, setFvt] = useState(false)

    return (
        <div>
            <div>
                <div className={styles.parentLayout}>
                    <div className={styles.ExpertLayout}>

                        <div className={styles.ExpertImg}>
                            <Image
                                src={props.dt.src}
                                alt='Experts'

                            />
                        </div>

                        <div className={styles.ExpertInfo}>
                            <h3 className={styles.ExpertName} style={{
                                alignSelf: props.featured ? 'center' : 'flex-start'
                            }}>{props.dt.name}</h3>
                            <Rating size='small' value={props.dt.rating} />
                            <p className={styles.ExpertPosition}>{props.dt.location}</p>
                            <div className={styles.ExpertStatus}>
                                <span> {props.dt.tags.tag1} </span>
                                <span> {props.dt.tags.tag2} </span>
                                <span> {props.dt.tags.tag3} </span>
                            </div>
                            <p className={styles.ExpertTime}>Open untill {props.dt.availableTime}</p>
                            <div className={styles.ExpertContact}>
                                <button>Contact</button>
                                <button>Send Enquiry</button>
                            </div>
                            <div className={styles.featured}>
                                {(props.featured) ? <button>Featured</button> : <button style={{ visibility: "hidden" }}>Featured</button>}
                                <span onClick={() => {
                                    setFvt(!fvt);
                                }}>
                                    {fvt ? "❤️" : "🤍"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpertLayout
