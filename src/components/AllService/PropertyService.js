import React from 'react'
import ServiceLayout from './ServiceLayout'
import datas from "@/components/rentagreement/Data";

import styles from "./service.module.css"
const PropertyService = () => {
    const filteredData = datas["EstateService"].slice(0, 5);

  return (
    <div>
      <div className={styles.Services}>
        <h2>Property Service</h2>
        <p>Specialized in designing spaces efficiently and aesthetically based on client inputs. I have experience in this business.</p>
      </div>
    <div className={styles.PropertyService}>
        {filteredData.map((dt, index) => (
      <ServiceLayout key={index} source={dt.source} service={dt.service}
       />
      ))}
    </div>
    </div>
  )
}

export default PropertyService
