"use client";

import React, { Fragment, useState } from "react";

import Header from "@/components/exploreLocality/Header";
import BottomNav from "@/components/exploreLocality/BottomNav";
import ViewAll from "@/components/exploreLocality/ViewAll";


const ExploreLocality = () => {
  const [currentActiveDashboard, setCurrentActiveDashboard] = useState("");

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
        <div className="text-6xl flex items-center justify-center p-[10rem]">
          Insights Content
        </div>
      );
    } else {
      return (
        <div className="text-6xl flex items-center justify-center p-[10rem]">
          Insights Content
        </div>
      );
    }
  };

  const handleActiveChange = (currentActive) => {
    setCurrentActiveDashboard(currentActive);
  };

  return (
    <Fragment>
      <Header />

      <BottomNav onActiveChange={handleActiveChange} />

      {renderDashboardComponent()}
    </Fragment>
  );
};

export default ExploreLocality;
