"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import "./navbar.css";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import Image from "next/image";
import FlyoutMenuSections from "./FlyoutMenuSections";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import { buyerMenuContent, sellerMenuContent, serviceMenuContent, blogMenuContent, tenantMenuContent } from "./Menu";
import SignupPopup from "../Homepage/SignupPopup";
import OtpPopup from "../Homepage/OtpPopup";
import SigninPopup from "../Homepage/SigninPopup";

const Menu = ({ setMenuPosition, setHoveredMenu }) => {
  const handleClick = (menu, event) => {
    setHoveredMenu(menu);
    if (event) {
      const rect = event.currentTarget.getBoundingClientRect();
      setMenuPosition({ top: rect.bottom, left: rect.left });
    }
  };

  return (
    <>
      <p onClick={(e) => handleClick("buyer", e)}>
        <a href="#">Buyer</a>
      </p>
      <p onClick={(e) => handleClick("seller", e)}>
        <a href="#">Seller</a>
      </p>
      <p onClick={(e) => handleClick("tenant", e)}>
        <a href="#">Tenant</a>
      </p>
      <p onClick={(e) => handleClick("blog", e)}>
        <a href="#">Blog</a>
      </p>
      <p onClick={(e) => handleClick("services", e)}>
        <a href="#">Services</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Gurugram');
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [signInPopup, setSignInPopup] = useState(false);
  const [popupTab, setPopupTab] = useState("signup");

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const openSignupPopup = (tab) => {
    setPopupTab(tab);
    setShowSignupPopup(true);
  };

  const closeSignupPopup = () => {
    setShowSignupPopup(false);
  };

  const closeOtpPopup = () => {
    setShowOtpPopup(false);
  };

  const handleOpenOtpPopup = () => {
    setShowSignupPopup(false);
    setShowOtpPopup(true);
  };

  const handleOpenSignInPopup = () => {
    setShowSignupPopup(false);
    setSignInPopup(true);
  };

  const closeSignInPopup = () => {
    setSignInPopup(false);
  };

  const handleScroll = () => {
    if(typeof window === 'undefined') return;
    
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    if(typeof window === 'undefined') return;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  return (
    <div className={`navbar${isHomePage ? "" : "Page"}${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={45}
            className='close'
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu2Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container">
            <div className="navbar-menu_container-links">
              <MenuMobile />
              <div className="navbar-menu_container-links-sign">
                <p onClick={() => openSignupPopup("SignIn")}>Sign In</p>
                <Link href={"/propertylisting"}><h5>Post your Property</h5></Link>
                <h5>Post For Business</h5>
                <button type="button" onClick={() => openSignupPopup("SignUp")}>Sign Up</button>
              </div>
            </div>
            {showSignupPopup && (
              <SignupPopup
                onClose={closeSignupPopup}
                handleOpenOtpPopup={handleOpenOtpPopup}
                handleOpenSignInPopup={handleOpenSignInPopup}
                tabs={popupTab}
              />
            )}
            {showOtpPopup && <OtpPopup onClose={closeOtpPopup} />}
            {signInPopup && <SigninPopup onClose={closeSignInPopup} />}
          </div>
        )}
      </div>

      <div className="navbar-links">
        <div className="navbar-links__logo ">
          <Image
            alt="Logo"
            src="/lda.png"
            height={20}
            width={40}
            className="IMG"
          />
          <h3 className="font-[Poppins] text-white">Deal Acres</h3>
        </div>

        <div className="custom-select-container ">
          <select
            value={selectedLocation}
            onChange={handleLocationChange}
            className="text-white bg-transparent font-bold hidden md:block nav-drop custom-select"
          >
            <option className="text-black bg-white" value="Gurugram">Gurugram</option>
            <option className="text-black bg-white" value="Delhi">Delhi</option>
            <option className="text-black bg-white" value="Mumbai">Mumbai</option>
          </select>
          <BsFillArrowDownSquareFill
            color={!isHomePage || scrolled ? "white" : "blue"}
            className="custom-arrow hidden md:block arrow"
          />
        </div>

        <div className="navbar-links__container">
          <Menu
            setMenuPosition={setMenuPosition}
            setHoveredMenu={setHoveredMenu}
          />
        </div>
        <div className="navbar-sign">
          <Link
            href="#"
            className=" text-sm sm:text-base md:text-sm text-center mr-5 font-light text-white sm:font-normal md:font-medium shadow-blue-100 shadow-sm bg-blue-500 p-2 sm:p-2 rounded-3xl hover:bg-blue-700 hover:shadow-md hover:shadow-blue-100"
          >
            Post For Business
          </Link>
          <Link
            href="/propertylisting"
            className=" text-sm sm:text-base md:text-sm text-center font-light text-white sm:font-normal md:font-medium shadow-blue-100 shadow-sm bg-blue-500 p-2 sm:p-2 rounded-3xl hover:bg-blue-700 hover:shadow-md hover:shadow-blue-100"
          >
            Post Your Property{" "}
            <span className="text-yellow-500 sm:text-sm font-bold">Free</span>
          </Link>
          <Link
            href="#"
            onClick={() => openSignupPopup("SignIn")}
            className="mx-3 text-base hover:rounded-2xl p-2 bg-gradient-to-r hover:from-blue-700 hover:to-indigo-600 rounded-3xl text-white font-medium hover:font-bold"
          >
            Sign In
          </Link>
          <button type="button" onClick={() => openSignupPopup("SignUp")}>Sign Up</button>
          {showSignupPopup && (
            <SignupPopup
              onClose={closeSignupPopup}
              handleOpenOtpPopup={handleOpenOtpPopup}
              handleOpenSignInPopup={handleOpenSignInPopup}
              tabs={popupTab}
            />
          )}
          {showOtpPopup && <OtpPopup onClose={closeOtpPopup} />}
          {signInPopup && <SigninPopup onClose={closeSignInPopup} />}
        </div>
      </div>
      <Link href="/propertylisting">
        <div className="md:hidden bg-white p-1 font-semibold text-blue-600 text-xs rounded-lg">Post Property <span className=" text-green-700 ">Free</span></div>
      </Link>
      {hoveredMenu && (
        <div
          onMouseLeave={() => setHoveredMenu(null)}
          className="flyout-menu-container mt-6"
          style={{ top: menuPosition.top, left: menuPosition.left }}
        >
          <FlyoutMenuSections sections={getSections(hoveredMenu)} />
        </div>
      )}
    </div>
  );
};

const MenuMobile = () => (
  <>
    <p className="text-[12px]">
      <a href="#buyer">Buyer</a>
    </p>
    <p>
      <a href="#seller">Seller</a>
    </p>
    <p>
      <a href="#tenant">Tenant</a>
    </p>
    <p>
      <a href="blog">Blog</a>
    </p>
    <p>
      <a href="#services">Services</a>
    </p>
  </>
);

const getSections = (menu) => {
  switch (menu) {
    case "buyer":
      return buyerMenuContent.sections;
    case "seller":
      return sellerMenuContent.sections;
    case "tenant":
      return tenantMenuContent.sections;
    case "blog":
      return blogMenuContent.sections;
    case "services":
      return serviceMenuContent.sections;
    default:
      return [];
  }
};

export default Navbar;
