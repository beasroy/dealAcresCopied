import React from "react";
import styles from "./aboutRA.module.css";
import Image from "next/image";
import Button from 'react-bootstrap/Button';

// images
import About from "../../../public/rentagreement/WRA.jpg";
import Registered from "../../../public/rentagreement/registered.jpg";
import TandC from "../../../public/rentagreement/TandC.jpg";
import AdvOwner from "../../../public/rentagreement/AdvOwner.jpg";
import AdvTenants from "../../../public/rentagreement/AdvTenants.webp";

// Component
const AboutRentAgreement = () => {
  return (
    <div>

      <h2 className={`${styles.AboutTitle} !text-2xl`}>All you need to know about <span className="text-[#FFCE38]">Rent Agreement</span>
      </h2>
{/* What is Rent Agreement? */}
      <div className={styles.MainLayout}>
        <div>
          <h3>What is Rent Agreement</h3>
          <p>
            A house rent agreement can simply be defined as a legal contract between the landlord and tenant for a fixed period. It is a set of terms and conditions, which have to be adhered to by both parties. The rent agreement is renewable every 11 months or more, or as per the timeframe mentioned in the contract.
          </p>
        </div>

        <div>
          <Image src={About} />
        </div>
      </div>
{/* Registered Rent Agreement */}
      <div className={styles.MainLayout}>
      <div>
          <Image src={Registered} />
        </div>

        <div>
          <h3>Registered Rent Agreement</h3>
          <p>
          Any rental agreement for more than 12 months needs to be registered for both tenants and landlords. An amount of INR 1100 is charged for rent agreement registration in addition to the applicable stamp duty. Stamp duty usually varies across states. For example, in Delhi, stamp duty charges for a property rented out for up to 5 years are approximately 2%, and 3% if the property is rented out for more than 5 but less than 10 years.
          </p>
        </div>
      </div>

{/* Terms & Conditions for Rent Agreement */}

      <div className={styles.MainLayout}>
        <div>
          <h3>Terms & Conditions for Rent Agreement</h3>
          <ul>
          <li>Duration of the rent period</li>
          <li>Monthly rent</li>
          <li>Security deposit</li>
          <li>Penalty for late payment of rent</li>
          <li>Additional charges like maintenance, society, water, gas, etc. to be borne by the tenant or landlord</li>
          <li>Provision of parking, if applicable</li>
          <li>Any damage or repair charges</li>
          <li>Rights of tenant</li>
          <li>Rights of landlord</li>
          </ul>
        </div>

        <div>
          <Image src={TandC} />
        </div>
      </div>

      {/* Advantages of Rent Agreement for Owners */}
      <div className={styles.MainLayout}>
        <div>
          <Image src={AdvOwner} />
        </div>
        <div>
          <h3>Advantages of Rent Agreement for Owners</h3>
          <p>
          Once you register the rent agreement online, the owner may use it as a protection if the tenant defaults in any way. It can be used successfully in a court of law until the agreement is registered. The stamp duty and the registration fee are included in the registration cost. According to Section 17 of the Registration Act 1908, if the lease extends to a period of at least 11 months, the arrangement must be registered.
          </p>
        </div>
      </div>
      
      {/* Advantages of Rent Agreement for Tenants */}
      <div className={styles.MainLayout}>
        <div>
          <h3>Advantages of Rent Agreement for Tenants</h3>
          <p>
          Securing the tenant’s rights is the primary objective?? of registering a rent agreement. This may or may not include verbal disagreements, sudden eviction, unreasonable rent hikes, eviction of deceased tenant’s family, etc The tenant can also benefit from the provision that defines that rent can only be raised in compliance with the agreement after one year and not as per the market rate or as per the whims of the landlord. Confrontations are common between landlords and tenants, no matter what part of the globe we might be living in. Some of the often-quoted tenants' grievances are unannounced calls, overdue maintenance, and unreasonable guest policies. However, by getting a fool-proof rental agreement, most of these problems can be easily prevented.
          </p>
        </div>

        <div>
          <Image src={AdvTenants} />
        </div>
      </div>
    </div>
  );
};

export default AboutRentAgreement;
