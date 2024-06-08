"use client"
import React from "react";
import { BsFilePdfFill } from "react-icons/bs";
import styles from "./downloadmaterial.module.css"
import RentalManual from "./RentalManual";
import InsightReview from "../locationOverview/content2/InsightReview";

const DownloadMaterial = () => {
  
  return (
    <div>
        <div className={styles.MainLayout}>
      <div>
        <h2 className="py-2">
          Download <span style={{color: "#31843e"}}>Free</span> Rent Agreement
        </h2>
        <p className="normal-paragraph text-justify">
          Get Hussle free Rent Agreement with our agreement format which will
          help you to stay Away from legal Disputes. So Download this Super easy
          and quick Rent Agreement Draft and make it easy for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-2 py-4 text-xs sm:text-sm">
        <span>
          <BsFilePdfFill size={20} color="red" style={{ display: "inline-block" }} />
          <a href="https://cyberleninka.org/article/n/203.pdf"> Residential Rent Agreement Format </a>
        </span>

        <span>
          <BsFilePdfFill size={20}color="red" style={{ display: "inline-block" }} />
          <a href="https://cyberleninka.org/article/n/203.pdf"> Commercial Rent Agreement Format  </a>
        </span>

        <span>
          <BsFilePdfFill size={20} color="red" style={{ display: "inline-block" }} />
          <a href="https://cyberleninka.org/article/n/203.pdf"> Lease Agreement Format  </a>
        </span>
      </div>
   
      </div>
    </div>
  );
};

export default DownloadMaterial;
