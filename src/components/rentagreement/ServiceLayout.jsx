import Image from 'next/image';
import React from 'react';
import styles from "./estateservice.module.css";

const ServiceLayout = (props) => {
  // const source = require(`${props.icon}`);

  return (
    <div className={styles.ServiceLayout} style={{ backgroundColor: props.bgColor }}>
      <p style={{ color: props.color }}>{props.service}</p>
      {/* <div className={styles.Img}> */}
      <Image
        src={props.source}
        alt={props.service}
        width={150}
        height={100}
      />
      {/* </div> */}
    </div>
  );
}

export default ServiceLayout;
