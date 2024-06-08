import React, { useState, useEffect } from "react";
import bedroom from "../../../../public/propertyListing/bedroom.jpg";
import Image from "next/image";
import "./about.css";


const About = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  // Function to toggle content visibility
  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia("(max-width: 800px)");
    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        toggleContent();
      }
    };

    mediaQuery.addListener(handleMediaQueryChange);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);


  return (
    <section style={{ height: "auto" }} className="">
      <div className="relative md:mt-10">
        <div className="absolute h-full w-full">
          <Image
            src={bedroom}
            layout="fill"
            objectFit="cover"
            className="bedroom"
            alt="Why Choose Us?"
          />
        </div>
        <div className="  w-[90%] xs:w-[80%] mx-auto pt-16 max-w-screen-xl text-justify ">
          <div className="bg-white p-5 md:space-y-10 border-t-4 border-b-[6px] shadow-[3px_4px_10px_#bfdbfe,-3px_0x_10px_#bfdbfe] text-sm sm:text-base rounded-xl" style={{boxShadow: "3px 4px 10px #bfdbfe, -3px 0px 10px #bfdbfe"}}>
            <h2 className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-bold text-center">
              Why Choose Deal Acres?
            </h2>
            <p className="max-md:py-2">
              Deal Acres is the only place where you can sell your property easily and quickly. If you are looking for one of the top free property listing sites in India, Deal Acres came first. When it comes to the free property listing, it becomes difficult to pick one that will actually help you rent or sell your residential or commercial property, then Deal Acres is one of the friendliest and fastest-growing real estate websites in India today, with some of the simple and easy facilities for uploading your property.
            </p>






            <p className="max-md:py-2">
              Property listing is the best way to reach out to potential customers who need to buy a home or home for rent. Homebuyers or tenants can shortlist the best among the pool of the real estate listings.
            </p>
            <br className="hidden md:block" />
            <p className="max-md:py-2">
              So, a builder, an owner, or an agent does not need to spend hours selling the house online or trying a hand at the online rental. Listing property is a process of a few minutes and you are done. Deal Acres has traffic and thousands of prospective homebuyers and tenants who visit the website every day. Sell your property quickly with Deal Acres.
            </p>
          </div>



          <div className="flex justify-center max-w-[440px] mx-auto">
            <button className="mt-5 font-bold text-white text-center  py-3 bg-[#0061DF] px-6 rounded-lg w-full">
              List Your Property for FREE NOW!
            </button>
          </div>
        </div>

        <div className="w-[90%] xs:w-[80%] mx-auto my-4 ">
          <div className="text-lg xs:text-xl md:text-2xl py-2">
            <h3>Everything you need to know about</h3>
            <h2 className="text-blue-600 font-bold">Deal Acres <span className="text-yellow-300">FREE</span> Property Listing</h2>
          </div>

          <div className="flex flex-col gap-2 md:gap-4 py-2 md:py-4">
            <div className="">
              <h3 className="text-base xs:text-lg md:text-xl font-bold">What is Free Property Listing</h3>
              <p className="text-sm sm:text-base">It is a process where a builder, as owner or agent can list their property for free on this real estate portal. Through this, you can sell or rent your property effectively and efficiently. It is the perfect way to reach the audience who want to rent their home or buy their dream home. By doing property listing you save your time for selling or renting it.</p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold">Advantages of Free  Listing</h3>
              <ul className="text-sm md:text-base list-disc px-8 ">
                <li className="">Provide free online exposure to more buyers.</li>
                <li className="">A platform for selling and buying real estate.</li>
                <li className="">Interact with and engage potential customers in your area.</li>
                <li className="">Negotiate and expedite the purchase.</li>
                <li className="">You can save money by working as your own real estate agent.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
