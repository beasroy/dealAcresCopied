import Image from "next/image";
import React from "react";
import Network from "../../../public/Agent/network.png";
import Service from "../../../public/Agent/Service.png";
import Negotiation from "../../../public/Agent/Negotiation.png";
import styles from "./realagent.module.css";

const RealAgent = () => {
  return (
    <div className={styles.RealAgent}>
      <div>
        <h2 className="max-xs:!text-[20px]">Why choose a Hisar Real Agent?</h2>
        <div className={styles.ReasonsBlock}>
          <div className={styles.Reasons}>
            <Image src={Network} alt="Strong Local Network" />
            <h5>Strong Local Network</h5>
            <p>
              A local agent has established relationships with other
              professionals in the area, such as lenders, and inspectors, which
              can help in buying or Selling Process.
            </p>
          </div>

          <div className={styles.Reasons}>
            <Image src={Service} alt="Personalized Service" />
            <h5>Personalized Service</h5>
            <p>
              Local real estate agents tend to have a smaller client base,
              allowing them to provide more personalized attention to each
              client and tailor their services to meet your specific needs.
            </p>
          </div>
          <div className={styles.Reasons}>
            <Image src={Negotiation} alt="Expertise in Negotiation" />
            <h5>Expertise in Negotiation</h5>
            <p>
              A local real estate agent will have experience in negotiating real
              estate deals in the local market. They can help you and ensure
              that you get the best possible price for your property.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealAgent;
