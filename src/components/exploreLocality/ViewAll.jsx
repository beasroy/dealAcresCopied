import React, { Fragment } from "react";

import SearchBar from "@/components/exploreLocality/ViewAllComponents/SearchBar";
import Sidebar from "@/components/exploreLocality/ViewAllComponents/SideBar";
import FNQ from "@/components/localities/FNQ";
import Services2 from "@/components/Homepage/services2/Services2";
import Explore from "@/components/Homepage/explore/Explore";
import ExploreLocalitiesBox from "./ViewAllComponents/ExploreLocalitiesBox";
import InterestingReads from "./ViewAllComponents/InterestingReads";
import BannerAdvertisement from "./ViewAllComponents/BannerAdvertisement";
import LocationTagFilterComponent from "./ViewAllComponents/LocationTagFilterComponent";

const ViewAll = () => {

  const exploreLocalitiesData = Array.from({ length: 12 });

  return (
    <Fragment>
      <BannerAdvertisement />

      <SearchBar />

      <LocationTagFilterComponent />

      <div className="px-10 flex flex-row items-start space-x-10 max-lg:space-x-0 max-sm:px-3">
        <Sidebar />
        <div className="w-full p-4 flex flex-col items-center justify-center max-lg:p-2 max-sm:p-0">
          <div className="flex flex-wrap gap-8 pt-10 justify-evenly max-lg:pl-2 max-lg:gap-y-4 max-lg:gap-x-4">
            {exploreLocalitiesData.map((_, index) => (
              <ExploreLocalitiesBox key={index} />
            ))}
          </div>
          <div className="w-full flex items-center justify-center py-3 mt-5">
            <button className="font-semibold text-lg bg-blue-600 px-3 py-1 text-white rounded-md">
              Show More
            </button>
          </div>
        </div>
      </div>

      <Explore />

      <div className="max-w-screen-xl mx-auto pl-10 lg:pl-5 max-sm:pl-0">
        <Services2 />
        <InterestingReads />

<FNQ />
      </div>

     
    </Fragment>
  );
};

export default ViewAll;
