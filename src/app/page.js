'use client';
import React, { useState, useEffect } from 'react';

import Explore from "@/components/Homepage/explore/Explore";
import Header from "../components/Homepage/header/Header";
import Postercard from "@/components/Homepage/postercard/Postercard";
import Toparticles from "@/components/Homepage/toparticles/Toparticles";
import Articlesmanual from "@/components/Homepage/articlesmanual/Articlesmanual";
import src1 from "../../public/postercardimg1.jpg";
import src2 from "../../public/postercardimg2.jpg";

import WhyChooseUs from "@/components/Homepage/chooseus/WhyChooseUs";
import TopProject from "@/components/Homepage/TopProject/TopProject";
import ExploreServices from "@/components/Homepage/ExploreServices/ExploreServices";
import PopularBuilder from "@/components/Homepage/PopularBuilder/PopularBuilder";
import Testimonial from "@/components/Homepage/testimonial/Testimonial";
import '../components/Homepage/homepage.css'
import NewOption from "@/components/Homepage/Option/Option";
import MobileTopProject from "@/components/Homepage/TopProject/MobileTopProject";
import MobilePopularBuilder from '@/components/Homepage/PopularBuilder/MobilePopularBuilder';
import MobileWhyChooseUs from '@/components/Homepage/chooseus/MobileWhyChooseUs';
import MobilePostercard from '@/components/Homepage/postercard/MobilePosterCard';
import MobileArticlesmanual from '@/components/Homepage/articlesmanual/MobileArtclesmanual';
import MobileToparticles from '@/components/Homepage/toparticles/MobileToparticles';
import MobileOption from '@/components/Homepage/Option/MobileOption';
import MobileHeader from '@/components/Homepage/header/MobileHeader';
import MobileExplore from '@/components/Homepage/explore/MobileExplore';


export default function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {

    if (typeof window !== 'undefined') {
      const setInitialScreenState = () => {
        setIsLargeScreen(window.innerWidth > 767);
      };


      setInitialScreenState();


      const handleResize = () => {
        setIsLargeScreen(window.innerWidth > 767);
      };


      window.addEventListener('resize', handleResize);


      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className=" overflow-hidden">
      {isLargeScreen ?<Header />:<MobileHeader />}
      <ExploreServices />

      <div className="max-w-[1100px] mx-auto">
      {isLargeScreen ?<Explore />:<MobileExplore />}
        {isLargeScreen ?
          <div style={{ position: "relative" }}>
            <Postercard
              title="Find Better Places to Live Work and Wonder..."
              src={src1}
              alt="src1"
              sidecontent1="BUY A HOME"
              sidecontent4="Search, Buy & Own Your Dream Home"
              sidecontent3="Explore from apartments, land, builders, floor, villas and more"
              buttontext="Find a Home"
            />
            <div className="toparticles-container">
              <Toparticles />
            </div>
          </div> : <><MobilePostercard
            title="Find Better Places to Live Work and Wonder..."
            src={src1}
            alt="src1"
            sidecontent1="BUY A HOME"
            sidecontent4="Search, Buy & Own Your Dream Home"
            sidecontent3="Explore from apartments, land, builders, floor, villas and more"
            buttontext="Find a Home" />
        <hr />
            <MobileToparticles />
          </>}
        <div className="mt-8 lg:mt-[18rem] w-full">
        {isLargeScreen ? <NewOption /> : <MobileOption />}
        </div>
      </div>






      <div className="max-w-[1100px] mx-auto">
        {isLargeScreen ?
          <div style={{ position: "relative" }}>

            <Postercard
              title="Sell or Rent your property faster with DealAcres"
              src={src2}
              alt="src2"
              sidecontent1="POST YOUR PROPERTY"
              sidecontent4="Register to post your property for "
              s2spantext="FREE"
              sidecontent3="Sell or rent your residential/commercial property"
              buttontext="Post your property FREE"
            />
            <div className="Articlesmanual-container">
              <Articlesmanual />
            </div>

          </div> : <><MobilePostercard
            title="Sell or Rent your property faster with DealAcres"
            src={src2}
            alt="src2"
            sidecontent1="POST PROPERTY"
            sidecontent4="Register to post your property for "
            s2spantext="FREE"
            sidecontent3="Sell or rent your residential /commercial property"
            buttontext="Post your property FREE" />
            <hr />
            <MobileArticlesmanual />
          </>}

      </div>

      <div className="mt-5 lg:mt-[17rem] ">  {isLargeScreen ? <TopProject /> : <MobileTopProject />}</div>
      <div className="md:max-w-[1100px] sm:max-w-xs mx-auto">
        {isLargeScreen ? <PopularBuilder /> : <MobilePopularBuilder />}
        {isLargeScreen ? <WhyChooseUs /> : <MobileWhyChooseUs />}

      </div>

      <Testimonial />
    </div>

  );
}

