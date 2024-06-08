"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../rentagreement/expert.module.css";
// import style from "./agent.module.css"
import { Rating } from "@mui/material";

const ExpertLayout = (props) => {
  const [fvt, setFvt] = useState(false);

  return (
    <div>
      {props.dt.featured == props.featured ? (
        <div>
          <div className={styles.parentLayout}>
            <div className={styles.ExpertLayout}>
              <div className={styles.ExpertImg}>
                <Image src={props.dt.src} alt="Experts" width={500} height={500} />
              </div>

              <div className={styles.ExpertInfo}>
                <div className={styles.ExpertName}>
                <h3 >{props.dt.name}</h3>

                <div className={`${styles.mfeatured}`}>
                  {props.dt.featured ? (
                    <button>Featured</button>
                  ) : (
                    <button style={{ visibility: "hidden" }}>Featured</button>
                  )}
                  <span
                    onClick={() => {
                      setFvt(!fvt);
                    }}
                  >
                    {fvt ? "❤️" : "🤍"}
                  </span>
                </div>
                </div>
                <Rating value={props.dt.rating} size="small" />
                <p className={styles.ExpertPosition}>{props.dt.location}</p>
                <div className={styles.ExpertStatus}>
                  <span> {props.dt.tags.tag1} </span>
                  <span> {props.dt.tags.tag2} </span>
                  <span> {props.dt.tags.tag3} </span>
                </div>
                <p className={styles.ExpertTime}>
                  Open untill {props.dt.availableTime}
                </p>
                <div className={styles.ExpertContact}>
                  <button>Contact</button>
                  <button>Send Enquiry</button>
                </div>
                <div className={styles.featured}>
                  {props.dt.featured ? (
                    <button>Featured</button>
                  ) : (
                    <button style={{ visibility: "hidden" }}>Featured</button>
                  )}
                  <span
                    onClick={() => {
                      setFvt(!fvt);
                    }}
                  >
                    {fvt ? "❤️" : "🤍"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ExpertLayout;
