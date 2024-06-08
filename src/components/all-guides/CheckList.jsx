// CheckList.js

import React, { useState, useEffect } from 'react';
import styles from './allguides.module.css';
import ManualCard from './ManualCard';

const dummyCheckList = [
  "What to Buy?",
  "When to Buy?",
  "Where to Buy?",
  "How to Buy?",
  "Financials",
  "Home Loan",
  "Legal & Tax",
  "Tips and Tricks",
  "Moving in",
  "All about RERA",
  "NRI Homebuyers",
  "Distressed property",
  "Disputed property",
  "Buying a home under PMAY",
  "Theme-based Homes",
  "Real Estate Technology",
];

const CheckList = ({ tab, data, DropIcon }) => {
  const [selectedGuide, setSelectedGuide] = useState(tab);
  const [selectedTopic, setSelectedTopic] = useState(-1);


  useEffect(() => {
    setSelectedGuide(tab);
  }, [tab]);

  const handleGuideClick = (index) => {
    setSelectedGuide(index);
    console.log('Clicked on item:', dummyCheckList[index], selectedGuide);
  };

  return (
    <div className={`${styles.checkListContainer} max-w-[400px] md:max-w-full mx-auto md:mx-0 px-4 py-4`}>
      <ul className={`${styles.checkList} max-w-[90%] mx-auto`}>
        {data[tab].checklist.map((item, index) => (
          <div key={index}>
            <li

              className={`font-bold text-sm md:text-[0.92rem] lg:py-2 flex items-center gap-2 md:gap-1 cursor-pointer`}
              style={{ color: selectedGuide === index ? 'blue' : 'black' }}

            ><div className='hidden md:block'>
                <span className='w-[50px] inline-flex max-md:self-start max-md:py-2'>{index + 1} </span>
                <div className={`ml-2 max-md:py-2 min-[920px]:py-4  flex flex-col justify-between w-full`} onClick={() => {
                  if (selectedTopic === index) {
                    setSelectedTopic(-1)
                  } else {
                    setSelectedTopic(index)
                  }
                }}>
                  {item}
                  <DropIcon size={30} className="md:hidden" />
                </div>
                </div>
                <div className='md:hidden'>
                <span className='w-[50px] inline-flex self-start py-2'>{index + 1} </span>
                <div className={`ml-2 py-2 min-[920px]:py-4 flex flex-col w-full`} onClick={() => {
                  if (selectedTopic === index) {
                    setSelectedTopic(-1)
                  } else {
                    setSelectedTopic(index)
                  }
                }}>
                  <div className='flex justify-between w-full border-b border-b-black ' onClick={() => handleGuideClick(index)} >
                    {item}
                    <DropIcon size={30} />
                  </div>

                  <div id="manualCards" className={` flex-col gap-4   text-black  ${selectedTopic === index ? 'flex' : 'hidden'} md:hidden`}>
                    {[...Array(10).keys()].map((key) => {



                      return (<div className='' key={key}>
                        <ManualCard />
                      </div>
                      )
                    }

                    )}
                  </div>
                </div>
                </div>

            </li>

            {/* <div id="manualCards" className={` flex-col gap-4  py-4  ${selectedTopic === index ? 'flex' : 'hidden'} md:hidden`}>
              {[...Array(10).keys()].map((key) => {



                return (<div className='' key={key}>
                  <ManualCard />
                </div>
                )
              }

              )}
            </div> */}


          </div>



        ))}
      </ul>
    </div>
  );
};

export default CheckList;
