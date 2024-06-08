"use client";
import React from "react";
import data from "../rentagreement/dummyData";
import AgentLayout from "./AgentLayout";
import styles from "./agent.module.css";

const Agent = (props) => {
  const filteredData = data["Experts"];
  return (
    <div className={styles.MainLayout}>
        <div className="w-full">
        {filteredData.map((dt, index) => (
          <AgentLayout
            key={index}
            dt={dt}
            filteredData={filteredData}
            // limit={props.limit}
            featured={props.featured}
          />
        ))}
      </div>
    </div>
  );
};

export default Agent;
