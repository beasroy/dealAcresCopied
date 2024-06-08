import React from 'react'
import BudgetRangeSelector from './BudgetRangeSelector'
import PropertytypeCommercial from './propertytypeCommercial'
import ConstructionCommercial from './constructionCommercial'
import AreaRangeSelector from './AreaRangeSelector'
import PurchaseType from './PurchaseTypeSelector'
import NewLocalitiesAndSocitiesSelector from "./NewLocalitiesAndSocitiesSelector";
import AmenitiesCommercial from './ammenitiesCommercial'
import LocalitiesCommercial from './LocalitiesCommercial'
import InvestType from './InvestType'
import InvestOption from './InvestOptions'
const PropertyFilter1 = () => {
  return (
    <div className="max-xl:hidden w-full h-fit p-4 border-[1px] border-gray-500 bg-white">
    <BudgetRangeSelector />
    <PropertytypeCommercial />
    <InvestOption />
    <InvestType />
    <LocalitiesCommercial />
    <AreaRangeSelector />
    <ConstructionCommercial />
    <PurchaseType />
    <NewLocalitiesAndSocitiesSelector />
    <AmenitiesCommercial /></div>
  )
}

export default PropertyFilter1