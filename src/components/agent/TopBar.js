import { SearchRounded } from "@mui/icons-material";
import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import styles from "./topbar.module.css";

const buttons = [
  <Button variant="text" size="large" key="Buy" className="border-r ">
    Buy
  </Button>,
  <Button variant="text" key="Sell">
    Sell
  </Button>,
  <Button variant="text" key="Rent">
    Rent
  </Button>,
];

const TopBar = () => {
  return (
    <div className={styles.topbarLayout}>
      <div className={styles.title}>
        <h1>Property Dealer & Real Estate Agents in Hisar</h1>
        <p>
          Looking for agents in <a href="#">nearby areas?</a>
        </p>
      </div>

      <div className={styles.searchLayout}>
        <div className={styles.searchBar}>
          <input
            id="SearchAgent"
            type="search"
            className="px-8 placeholder:text-xs sm:placeholder:text-sm"
            placeholder="Enter Locality, Agent Name"
          />
          <label htmlFor="SearchAgent">
            <SearchRounded color="light" />
          </label>
        </div>

        <div className=" min-[768px]:px-8  flex gap-0">
          <button className="border border-black rounded-l-xl  px-1 xs:px-2 sm:px-4 md:px-8 text-xs xs:text-sm sm:text-base">Buy</button>
          <button className="border-y border-y-black   px-1 xs:px-2 sm:px-4 md:px-8 text-xs xs:text-sm sm:text-base">Sell</button>
          <button className="border border-black  rounded-r-xl px-1 xs:px-2 sm:px-4 md:px-8 text-xs xs:text-sm sm:text-base">Rent</button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
