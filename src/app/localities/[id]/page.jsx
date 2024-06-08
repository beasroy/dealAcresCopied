"use client";

import React, { Fragment, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

import BottomNav from "@/components/localities/BottomNav";
import ViewAll from "@/components/localities/ViewAll";

import headerMapImage from "../../../../public/localities/small-header-map-icon.png";
import Insights from "@/components/localities/Insights";

const SingleLocality = () => {
  const { id: stateId } = useParams();
  const [currentActiveDashboard, setCurrentActiveDashboard] = useState("");

  const handleActiveChange = (currentActive) => {
    setCurrentActiveDashboard(currentActive);
  };

  const renderDashboardComponent = () => {
    if (currentActiveDashboard === "View All") {
      return <ViewAll />;
    } else if (currentActiveDashboard === "Articles") {
      return (
        <div className="text-6xl flex items-center justify-center p-[10rem]">
          Articles Content
        </div>
      );
    } else if (currentActiveDashboard === "Locality Insights") {
      return (
        <div className="text-6xl flex items-center justify-center p-[10rem]">
          Locality Insights Content
        </div>
      );
    } else if (currentActiveDashboard === "Insights") {
      return (
       
          <Insights />
       
      );
    } else {
      return (
        <Insights />
      );
    }
  };

  return (
    <Fragment>
      <header className="relative h-[20rem] w-full bg-cover bg-center bg-no-repeat bg-[url('https://e0.pxfuel.com/wallpapers/685/630/desktop-wallpaper-india-delhi-roads-street-lights-cities.jpg')]">
        <div className="absolute bg-[#004AAD] opacity-75 w-full h-full"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-2 p-2">
          <Image
            className="w-16 h-16 font-bold text-white"
            src={headerMapImage}
            alt="header map"
          />
          <h1 className="text-4xl text-white font-bold">
            All about {stateId} localities
          </h1>
          <p className="text-lg text-white">
            Overview | Reviews | Lifestyle & more
          </p>
        </div>
      </header>

      <BottomNav onActiveChange={handleActiveChange} />

      {renderDashboardComponent()}
    </Fragment>
  );
};

export default SingleLocality;
