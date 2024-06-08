'use client';

import React from "react";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import PropertyFilter from "@/components/all-property/PropertyFilter";
import PropertyFlatList from "@/components/all-property/PropertyFlatList";
import ProjectCompareSidebar from "@/components/all-property/ProjectCompareSidebar";
import ConnectWithTopAgents from "@/components/all-property/ConnectWithTopAgents";
import InterestingReads from "@/components/all-property/InterestingReads";
import FAQ from "@/components/localities/FAQ";
import { ComparePropertyProvider } from "@/context/ComparePropertyContext";
import Insights from "@/components/all-property/Insights";
import { useCompareProperty } from "@/context/ComparePropertyContext";

const AllProperty = () => {

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      className="text-blue-500"
      href="/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Typography key="2" className="text-blue-500">
      Properties in Gurgaon
    </Typography>,
  ];

  const { compareProperties } = useCompareProperty();
  const hasCompareProperties = compareProperties.length > 0;

  return (
    <div className="p-[3rem] w-full rounded-xl max-md:px-[4rem] max-sm:px-5">
      <div className={`flex  w-full mx-auto ${hasCompareProperties ? 'max-w-screen-xl ' : 'max-w-[1000px]'}`}>
        <div className={`flex flex-col md:flex-row items-center md:items-start`}>
          <div className={`${hasCompareProperties ? 'w-[25%]' : 'w-[70%]'} my-4 text-center md:text-left`}>
            <div className="my-4 max-xl:hidden">
              <Stack spacing={2}>
                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  {breadcrumbs}
                </Breadcrumbs>
              </Stack>
            </div>
            <PropertyFilter />
            <ConnectWithTopAgents />
          </div>

          <div className={`${hasCompareProperties ? 'w-[50%]' : 'w-full'}`}>
            <PropertyFlatList />
          </div>

          {hasCompareProperties && (

            <ProjectCompareSidebar />
          )}
        </div>
      </div>
      <div className="mt-8">
        <Insights />

      </div>
      <InterestingReads />
      <FAQ />
    </div>
  );
};

export default AllProperty;
