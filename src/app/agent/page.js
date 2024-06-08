"use client";
import AskDealAcres from "@/components/agent/AskDealAcres";
import BestAgent from "@/components/agent/BestAgent";
import FeedbackPopup from "@/components/agent/Feedback";
import ImgSlider from "@/components/agent/ImgSlider";
import NormalAgent from "@/components/agent/NormalAgent";
import RealAgent from "@/components/agent/RealAgent";
import TopBar from "@/components/agent/TopBar";
import { Button } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const AgentPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 20000); 

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };
 
  return (
    <div>
      {/* <ImgSlider /> */}
      <div style={{ position: 'relative', width: '100%', height: '35vh', marginBottom: "30px" }} className="max-md:!h-[200px] after:content-[''] after:absolute after:inset-0  after:bg-white/10">
        <Image
          src='/Agent/agent_banner_2.png'
          alt='banner'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <TopBar />
      <BestAgent />
      {showPopup && <FeedbackPopup onClose={closePopup} />}
      <RealAgent />
      <NormalAgent />
      <AskDealAcres />
      <NormalAgent button={true} />
    </div>
  );
};

export default AgentPage;
