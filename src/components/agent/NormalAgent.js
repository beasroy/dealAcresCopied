"use client";
import React, { useState } from "react";
import data from "../rentagreement/dummyData";
import AgentList from "./AgentList";
import styles from "./agent.module.css";

const NormalAgent = (props) => {
  // let [limit, setLimit] = useState(5);
  const filteredData = data["Experts"];
  return (
    <div className={styles.agentLayout}>
      <div className="flex flex-col md:w-[67%] items-center py-2">
        <AgentList featured={false} limit={2} />
        {props.button == true ? (
          <button className="border-2 px-1 sm:px-2 md:px-4 py-1 sm:py-2 md:mb-4 w-fit text-sm sm:text-xl rounded-lg border-black">
            More agents in Hisar
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default NormalAgent;
