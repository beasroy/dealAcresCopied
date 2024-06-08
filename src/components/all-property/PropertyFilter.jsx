"use client";

import React from "react";

import BudgetRangeSelector from "./BudgetRangeSelector";
import PropertyTypeSelector from "./PropertyTypeSelector";
import BHKSelector from "./BHKSelector";
import ConstructionStatus from "./ConstructionStatus";
import PostedBy from "./PostedBy";
import AreaRangeSelector from "./AreaRangeSelector";
import LocalitiesSelector from "./LocalitiesSelector";
import NewLocalitiesAndSocitiesSelector from "./NewLocalitiesAndSocitiesSelector";
import PurchaseTypeSelector from "./PurchaseTypeSelector";
import AmenitiesSelector from "./AmenitiesSelector";

const PropertyFilter = () => {
  return (
    <div className="max-xl:hidden h-fit p-4 border-[1px] border-gray-500 bg-white">
      <BudgetRangeSelector />
      <PropertyTypeSelector />
      <BHKSelector />
      <ConstructionStatus />
      <PostedBy />
      <AreaRangeSelector />
      <LocalitiesSelector />
      <NewLocalitiesAndSocitiesSelector />
      <PurchaseTypeSelector />
      <AmenitiesSelector />
    </div>
  );
};

export default PropertyFilter;
