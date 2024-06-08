import React, { useState } from "react";
import Image from "next/image";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Socialicons from "./icons";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

const NavbarSingle = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => (
    <>
      <p><a href="##home">HOME</a></p>
      <p><a href="##about"> ABOUT</a></p>
      <p><a href="#listing">LISTING</a></p>
      <p><a href="#contact"> CONTACT</a></p>
    </>
  );

  return (
    <>
    <div className="p-5 hidden md:flex justify-around items-center ">
  <div className="flex flex-row items-center gap-2">
    <MdEmail color="red" style={{ fontSize: '24px' }} /> 
    <p>Email us at: contact@dealacres.com  </p>
  </div>
  <div className="flex flex-row items-center gap-2">
    <BsTelephoneFill color="red" style={{ fontSize: '20px' }} /> 
    <p>Call us at: 8307757571</p>
  </div>
  <Socialicons />
</div>
    <hr color="red" />
      <div className="flex justify-around items-center px-6 md:px-0  py-4 bg-white">
        
        <div className="flex items-center space-x-4">
          <div>
            <Image
              alt="Logo"
              src="/lda.png"
              height={20}
              width={40}
              className="IMG"
            />
          </div>
          <h3 className="text-black font-semibold">Deal Acres</h3>
        </div>
        <div className="hidden md:flex md:space-x-6 md:pr-8 text-black">
          <Menu />
        </div>
        <div className="md:hidden">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={45}
              className="close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
          ) : (
            <RiMenu3Line
              color="black"
              size={27}
              onClick={() => {
                setToggleMenu(true);
              }}
            />
          )}
        </div>
      </div>
      {toggleMenu && (
        <div className="md:hidden z-[100] bg-black bg-opacity-90 w-full fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
          <div className="md:hidden self-end">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={45}
              className="fixed top-4 right-4"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
          ) : (
            <RiMenu3Line
              color="black"
              size={27}
              onClick={() => {
                setToggleMenu(true);
              }}
            />
          )}
        </div>
          
          <div className="flex flex-col items-center space-y-6 text-white">
            <Menu />
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarSingle;
