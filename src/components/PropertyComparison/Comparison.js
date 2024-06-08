import React from 'react'
import { Rating } from '@mui/material'
import Image from 'next/image'
import { SearchRounded } from "@mui/icons-material";
import Source from "../../../public/propertyComparison/product.jpg"

import styles from "./comparison.module.css"

const Comparison = () => {
  return (
    <div>
      <div className={styles.Comparison}>
        <h2>Compare Projects</h2>
        <p className='pl-[5px]'>Shubharambh in Uttam Nagar Vs Neelkantd Plots in Sector 34 Rohini</p>

        <table>

                <tr>
                    <td  rowspan="2"></td>
                    <th>Shubharambh</th>
                    <th>Neelkantd Plots</th>
                    <th><div className={styles.searchBar}>
          <input id="Search" type="search" />
          <label htmlFor="Search">
            <SearchRounded color="light" />
          </label>
        </div></th>
                </tr>

                <tr>
                    <td className={styles.White}>
                        <div>
                            <div>
                                <p><strong>Shubharambh</strong></p>
                                <p>Sector 93 Gurgaon</p>
                                <p>730 - 1530 Sq.ft</p>
                                <p>3BHK, FLATS, RESIDENTIAL PROPERTIES</p>
                                <Image
                                src={Source}
                                alt= "Shubharambh"
                                 />
                                <tr><td>Location</td><td>N/A</td></tr>
                                <tr><td>Nearby Facilities</td><td>N/A</td></tr>
                                <tr><td>Socity</td><td>N/A</td></tr>
                            </div>

                        </div>
                    </td>
                    <td>
                    <div>

                            <div>
                                <p><strong>Neelkantd Plots</strong></p>
                                <p>Sector 93 Gurgaon</p>
                                <p>730 - 1530 Sq.ft</p>
                                <p>3BHK, FLATS, RESIDENTIAL PROPERTIES</p>
                                <Image
                                src={Source}
                                alt="Neelkanth Plots"
                                />
                                <tr><td>Location</td><td>N/A</td></tr>
                                <tr><td>Nearby Facilities</td><td>N/A</td></tr>
                                <tr><td>Socity</td><td>N/A</td></tr>
                            </div>

                        </div>
                    </td>
                    <td>
                    
                        </td>
                </tr>
            {/* </thead>

            <tbody> */}
                <tr>
                    <td><strong>Status</strong></td>
                    <td>
                        <div>
                            <p><strong>Under Construction</strong></p>
                            <tr><td>Launch in</td><td>N/A</td></tr>
                            <tr><td>Possession by</td><td>N/A</td></tr>
                        </div>
                    </td>
                    <td>
                        <div>
                            <p><strong>Ready to Move</strong></p>
                            <tr><td>Construction Page</td> <td>    N/A</td></tr>
                        </div>
                    </td>
                    <td></td>
                </tr>

                {/* <div  className={styles.NoBorder}> */}
                {/* <td colspan="4"> */}
                <tr className={styles.Highlights}>
                    <td><strong>Highlights</strong></td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td></td>
                </tr>
                <tr className={styles.NoBorder}>
                    <td><strong>Amenities</strong></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr  className={styles.NoBorder}>
                    <td>Power Back Up</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td></td>
                </tr>

                <tr  className={styles.NoBorder}>
                    <td>Lift</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td></td>
                </tr>

                <tr  className={styles.NoBorder}>
                    <td>Reserved Parking</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td></td>
                </tr>
                
                <tr className={styles.NoBorder}>
                    <td>Security</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td></td>
                </tr>
                <tr className={styles.NoBorder}>
                    <td>More +</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                {/* </td> */}
                {/* </div> */}

                <tr>
                    <td><strong>Total Project Area</strong></td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td></td>
                </tr>

                <tr>
                    <td><strong>Prices</strong></td>
                    <td>₹  71.15 L - 1.85 Cr</td>
                    <td>₹  71.15 L - 1.85 Cr</td>
                    <td></td>
                </tr>
                <tr>
                    <td><strong>Units</strong> </td>
                    <td>2 Towers, 40 Units</td>
                    <td>40 Units</td>
                    <td></td>
                </tr>

                <tr>
                    <td><strong>Annual Rental Yield</strong></td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td></td>
                </tr>

                <tr>
                    <td><strong>Project Comments</strong></td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td></td>
                </tr>

                <tr>
                    <td>
                        <strong>Developer Details</strong>
                        </td>
                    <td>
                    S Gambhir Buildtech Pvt. Ltd
                    </td>
                    <td>
                    S Gambhir Buildtech Pvt. Ltd
                    </td>
                    <td></td>
                </tr>

                <tr  className={styles.NoBorder}>
                    <td>Experience</td>
                    <td><strong>13 yrs</strong></td>
                    <td><strong>13 yrs</strong></td>
                    <td></td>
                </tr>
                <tr  className={styles.NoBorder}>
                    <td>Total Projects</td>
                    <td><strong>2</strong></td>
                    <td><strong>1</strong></td>
                    <td></td>
                </tr>
                <tr  className={styles.NoBorder}>
                    <td>Ongoing Projects</td>
                    <td><strong>2</strong></td>
                    <td><strong>1</strong></td>
                    <td></td>
                </tr>

                <tr>
                    <td><strong>Overall Locality Overview</strong></td>
                    <td>
                        <tr>
                            <td>Commuting</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Public Transport</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Parking</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Connectivity</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Traffic</td>
                            <td><Rating /></td>
                        </tr>

                        <br />

                        <tr>
                            <td>Places of Interest</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Schools</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Restaurants</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Hospitals</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Market</td>
                            <td><Rating /></td>
                        </tr>

                        <div className={styles.ProjectDetails}>
                            <button>View Project Details</button>
                        </div>
                        
                    </td>
            
                    <td>
                        <tr>
                            <td>Commuting</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Public Transport</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Parking</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Connectivity</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Traffic</td>
                            <td><Rating /></td>
                        </tr>

                        <br />

                        <tr>
                            <td>Places of Interest</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Schools</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Restaurants</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Hospitals</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Market</td>
                            <td><Rating /></td>
                        </tr>
                        
                        <div className={styles.ProjectDetails}>
                            <button>View Project Details</button>
                        </div>
                    </td>
                    <td></td>
                </tr>

                
        </table>
      </div>

    </div>
  )
}

export default Comparison
