"use client";
import React, { useState } from "react";
import ServiceLayout from './ServiceLayout'
import datas from "@/components/rentagreement/Data";

import styles from "./service.module.css"

const HomeDesign = () => {
  let [start, setStart] = useState(5);
    let [limit, setLimit] = useState(10);
    const filteredData = datas["EstateService"].slice(start, limit);

    let toggleDisplay = () => {
      if (limit == 12) {
        setLimit(10);
      } else {
        setLimit(12);
      }
    };

  return (
    <div>
      <div  className={styles.Services}>
       <h2>Home Designing</h2>
        <p>specialized in designing spaces efficiently and aesthetically based on client inputs. I have experience in this business.</p>
      </div>
    <div className={styles.PropertyService}>
        {filteredData.map((dt, index) => (
      <ServiceLayout key={index} source={dt.source} service={dt.service}
       />
      ))}
    </div>

    <div className="text-center">
        <button className={styles.MoreService} onClick={toggleDisplay}>
          {limit == 7 ? "View Less" : "View All"}
        </button>
      </div>
    </div>
  )
}

export default HomeDesign
