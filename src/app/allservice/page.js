"use client";
import PropertyService from "@/components/AllService/PropertyService";
import ServiceBanner from "@/components/AllService/ServiceBanner";
import React from "react";
import styles from "./page.module.css";
import HomeDesign from "@/components/AllService/HomeDesign";
import ValueAddedServices from "@/components/AllService/ValueAddedServices";
import ChooseUs from "@/components/AllService/ChooseUs";
import Image from "next/image";
import Screen from "../../../public/allService/BgDesign.png";
import IntrestingReading from "@/components/locationOverview/content2/IntrestingReads";
import { data } from "../propertylisting/dummydata";
import ReadMore from "@/components/propertyListing/ReadMore/ReadMore";
import FAQ from "@/components/property/maincontentcontainer/FAQ";
import Help from "@/components/AllService/Help";

const page = () => {
  return (
    <div>
      <ServiceBanner />
      <div className={styles.Layout}>
        <PropertyService />
        <HomeDesign />
        <ValueAddedServices />
      </div>

      <Image src={Screen} className={styles.BgDesign} />

      <div className={styles.Layout}>
        <ChooseUs />
      </div>
      <ReadMore />

    <Help />

      <div className={styles.Layout}>
        <h2 className={styles.faq}>Frequently Asked Question</h2>
        <FAQ faqdata={data.mainContent.FaqData} />
      </div>

      <div className={styles.spacer}></div>


    </div>
  );
};
export default page;
