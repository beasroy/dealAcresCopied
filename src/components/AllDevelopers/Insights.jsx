import Image from 'next/image';
import React from 'react';


const Card = ({ imageUrl, heading, description }) => {
    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-md  bg-white flex flex-col justify-center items-center">
            <div className='w-20 h-20 relative rounded-full bg-blue-300 mt-2 '>
                <Image
                    src={imageUrl}
                    alt="Card"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full p-2"
                />
            </div>
            <div className="p-4">
                <div className="font-bold text-lg mb-2">{heading}</div>
                <p className="text-gray-700 text-[0.8rem]">{description}</p>
            </div>
        </div>
    );
}

const cardData = [
    {
      imageUrl: "/allDevelopers/location.png",
      heading: "Locality Insights",
      description: "Know more about different localities"
    },
    {
      imageUrl: "/allDevelopers/message.webp",
      heading: "Reviews by Locals",
      description: ""
    },
    {
      imageUrl: "/allDevelopers/notes.png",
      heading: "Check Articles",
      description: "On trending topics and policy updates"
    },
    {
      imageUrl: "/allDevelopers/user.webp",
      heading: "User Guides",
      description: "To help home buyers tenants and sellers"
    },
    {
      imageUrl: "/allDevelopers/location.png",
      heading: "Budget Calculator",
      description: "Check your affordability range for buying home"
    },
    {
      imageUrl: "/allDevelopers/calculator.webp",
      heading: "EMI Calculator",
      description: "Calculate your home loan EMI"
    }
  ];
  


const Insights = () => {
    return (
        <div className='relative p-4 bg-[#78c1f3] rounded-xl h-[25vh]'>
         <h1 style={{ fontFamily: "YACkoGIT9qo 0, _fb_, auto" }} className='mt-6 font-semibold text-2xl'>Insights & Tools</h1>
            <div className='grid grid-cols-6 gap-4 absolute top-[50%] left-0 justify-between w-full px-4'>
                {cardData.map((card, index) => (
                    <div key={index}>
                        <Card
                            imageUrl={card.imageUrl}
                            heading={card.heading}
                            description={card.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Insights;
