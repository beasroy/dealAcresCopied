import React, {useState}  from 'react'
import data from "@/components/rentagreement/Data.js"
import styles from "./servicebanner.module.css"
import India from "./India.js"


function getUniqueSortedStates(locations) {
  const uniqueLocations = locations.filter(
    (location, index, self) =>
      self.findIndex((l) => l.admin_name === location.admin_name) === index
  );

  return uniqueLocations.sort((a, b) =>
    a.admin_name.localeCompare(b.admin_name)
  );
}


const ServiceBanner = () => {
  const [stateName, setState] = useState("");
  return (
    <div>
      <div className={styles.BannerBg}>
        <div className={styles.BannerInfo}>
        <div className={styles.Info}>
            <strong>Explore endless real estate services with Deal Acres</strong>
        </div>
        <div className={styles.Filter}>
            <div>
            <p>Categories</p>
            <select
            variant="filled" color="light"
          select
          defaultValue="Rent Agreement"
          >
          {data["EstateService"].map((option) => (
              <option key={option.value} value={option.service}>
              {option.service}
            </option>
          ))}
        </select>
          </div>

            <div>
            <p>Search By State</p>
            <select onChange={(e) => setState(e.target.value)}>
    <option value="">Search By State</option>

    {India && getUniqueSortedStates(India["Locations"]).map((option) => (
        <option key={option.admin_name} value={option.admin_name}>
          {option.admin_name}
        </option>
      ))}
        </select>
          </div>

          <div>
          <p>Search By City</p>
            <select>
          <option value="">Search By City</option>
    {stateName &&
      India["Locations"].filter((option) => option.admin_name === stateName)
        .map((option) => (
          <option key={option.city} value={option.city}>
            {option.city}
          </option>
        ))}
        </select>
          </div>
          <div className={styles.SubmitButton}>
            <button>Submit</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ServiceBanner
