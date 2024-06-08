"use client";
import React, { useState } from "react";
import ServiceLayout from "./ServiceLayout";
import styles from "./estateservice.module.css";
import datas from "./Data.js";

const EstateService = () => {
  let [limit, setLimit] = useState(8);
  const filteredData = datas["EstateService"].slice(0, limit);

  let toggleDisplay = () => {
    if (limit == -1) {
      setLimit(8);
    } else {
      setLimit(-1);
    }
  };
  
  return (
    <div>
      <div className={styles.EstateService}>
        <h2 className="max-md:!text-xl max-md:xs:!text-2xl max-md:!pb-4">Explore Our Real Estate Service</h2>
        <div className={styles.Services}>
        {filteredData.map((dt, index) => (
          <ServiceLayout
          key={index}
            color={dt.color}
            bgColor={dt.bgColor}
            service={dt.service}
            source={dt.source}
          />
          ))}
          </div>
      </div>

      <div className="text-center">
        <button className={styles.MoreService} onClick={toggleDisplay}>
          {limit == -1 ? "View Less" : "View All"}
        </button>
      </div>
    </div>
  );
};

export default EstateService;
