"use client"
import React, { useState } from 'react'
import styles from "./explorebuilder.module.css"
import Image from 'next/image'
import BasicPagination from '../all-property/Pagination'
import data from "./dummyData.js"

const ExploreBuilder = () => {
  const [limit, setLimit] = useState(8);


  const [project, setProject] = useState("Residential");
  const [projectLimit, setProjectLimit] = useState(8);

  let toggleProjects = () => {
    if (projectLimit >= 8) {
      setProjectLimit(6);
    } else {
      setProjectLimit(8);
    }
  };

  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  // const maxLength = -1;


  // // Pagination -->

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const filteredData = data["Property"].slice(indexOfFirstCard, indexOfLastCard);
  // // const pageNumbers = Array.from({ length: 10 }, (_, index) => index + 1);


  // // const nextPage = () => {
  // //   if (currentPage < Math.ceil(data["Property"].length / cardsPerPage)) {
  // //     setCurrentPage(currentPage + 1);
  // //   }
  // // };

  // // const prevPage = () => {
  // //   if (currentPage > 1) {
  // //     setCurrentPage(currentPage - 1);
  // //   }
  // // };



  return (
    <div className={styles.ExploreBuilder}>
      {filteredData.map((dt, index) => (
       
        <div className="mt-[1.5rem] " key={index}>
       
          <div className={styles.TopBuilders}>
            <div className={styles.Logo}>
              <Image
                src={dt.builderLogo}
                alt={dt.builderName}
              />
            </div>
            <div>

              <h3>{dt.builderName}</h3>

              <p>{isTruncated ? (dt.description.slice(0, 210)) : (dt.description)}

                <span className={styles.SeeMore} onClick={toggleTruncate} >{isTruncated ? " Read More" : " Read Less"}</span>
              </p>

            </div>
          </div>
        

          <div className={styles.ProjectCategory}>
            <div className={styles.Category}>
              <span onClick={() => {
                setProject("Residential")
              }}><strong>Residential Projects</strong> </span>

              <span onClick={() => {
                setProject("Commercial")
              }}><strong>Commercial Projects</strong></span>
            </div>
            <hr />

            <div className={styles.projectLine}>
              {/* Featured start */}
              {dt[project].slice(0, projectLimit).map((property, index) => (
                <div key={index} className={styles.Projects}>
                  <div>
                    <Image
                      src={property.projectImg}
                      alt={property.ProjectName}
                    />
                  </div>
                  <div>
                    <h4>{property.ProjectName}</h4>
                    <p>by {property.group} </p>
                    <p>{property.address}</p>
                    <strong>{property.price}</strong>
                  </div>

                </div>

              ))}
             
          </div>
          <div className={styles.ViewAll}>
                <button onClick={toggleProjects}> {(projectLimit <= 8) ? " View All " + project + " Projects" : "View Less"}</button></div>

              {/* featured close */}

            </div>


        </div>

      ))}

      {/* <div className={styles.pagination}>

        <span onClick={prevPage}> {"<"} Previous Page</span>

        {pageNumbers.map((number) => (
          <span
            key={number}
            onClick={() => setCurrentPage(number)}
            style={{
              cursor: "pointer",
              fontWeight: currentPage === number ? "bold" : "normal",
              border: "1px solid #0061fd",
              borderRadius: "50%",
              padding: "0.5% 0.2%",  
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "4%",  
              height: "3%", 
              
            }}
          >
            {number}
          </span>
        ))}

        <span onClick={nextPage}>Next Page {">"}</span>
      </div> */}
      <BasicPagination />
    </div>
  )
}

export default ExploreBuilder
