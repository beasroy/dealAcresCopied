"use client";
import React, { useState } from "react";
import ServiceLayout from './ServiceLayout'
import datas from "@/components/rentagreement/Data";
import styles from "./service.module.css"

const ValueAddedServices = () => {
  let [start, setStart] = useState(12);
  let [limit, setLimit] = useState(17);
  const filteredData = datas["EstateService"].slice(start, limit);

  let toggleDisplay = () => {
    if (limit == 22) {
      setLimit(17);
    } else {
      setLimit(22);
    }
  };


  return (
    <div>
      <div className={styles.Services}>
        <h2>Value Added Service </h2>
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

export default ValueAddedServices