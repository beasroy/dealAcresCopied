import React from 'react'
import Image from 'next/image'


const Card = ({ index, imageUrl, heading, bgColor }) => {
    return (
        <div key={index} style={{ background: bgColor }} className="h-[7.5rem] w-[95%] border flex flex-col items-center justify-center gap-3 p-2 rounded-xl text-black">
            <p className='font-bold text-center text-xs xl:text-[0.82rem] h-[2rem]'>{heading}</p>
            <Image src={imageUrl} width={40} height={60} alt={heading} className='h-9 w-8' />
        </div>
    );
};

const NewExploreForBlog = () => {
   
    const cardData = [
        
        {
            imageUrl: 'https://media-public.canva.com/N3bz0/MAFi_QN3bz0/1/t.png',
            heading: 'Rent Agreement',
            bgColor: "rgb(182, 234, 250, 0.12)"
        },
        {
            imageUrl: 'https://media-public.canva.com/nB8Ek/MAFfqznB8Ek/1/t.png',
            heading: 'Home Loan',
            bgColor: "rgb(255, 145, 77, 0.12)"
        },
        {
            imageUrl: 'https://media-public.canva.com/FX_B4/MAFaqXFX_B4/1/t.png',
            heading: 'Property Valuer',
            bgColor: "rgb(203, 108, 230, 0.12)"
        },
        {
            imageUrl: 'https://media-public.canva.com/zLeFA/MAFKtnzLeFA/1/t.png',
            heading: 'Legal Services',
            bgColor: "rgb(0, 151, 178, 0.12)"
        },
        {
            imageUrl: 'https://media-public.canva.com/iA9GI/MAERBHiA9GI/1/t.png',
            heading: 'Chartered Accountant',
            bgColor: "rgb(255, 105, 105, 0.12)"
        },
        {
            imageUrl: '/homePage/homeDecor.webp',
            heading: 'Home Decor',
            bgColor: "rgb(255, 189, 89,0.12)"
        },
        {
            imageUrl: '/homePage/homeInterior.webp',
            heading: 'Home Interior',
            bgColor: "rgb(0, 191, 99,0.12)"
        },
        {
            imageUrl: '/homePage/vastu_sastra.png',
            heading: 'Vastu Sartar',
            bgColor: "rgb(70, 130, 169,0.12)"
        },
        {
            imageUrl: '/homePage/construction.webp',
            heading: 'Construction Contractor',
            bgColor: "rgb(225, 174, 96,0.12)"
        },
        {
            imageUrl: '/homePage/modular.webp',
            heading: 'Modular Kitchen',
            bgColor: "rgb(203, 108, 230,0.12)"
        },
        {
           
            heading: "Carpentar",
            imageUrl: "/ServiceIcons/Carpenter.png",
            bgColor: "rgb(123, 255, 144,0.12)"
        },
        {
            heading: "Painting Service",
            imageUrl: "/ServiceIcons/PaintingService.png",
            bgColor: "rgb(241, 181, 112,0.12)"
        },
        {
            
            heading: "Electrician",
            imageUrl: "/ServiceIcons/Electrician.png",
            color:"rgb(186, 112, 79)",
            bgColor: "rgb(186, 112, 79, 0.12)"
        },
        
        {
           
            heading: "Security System",
            imageUrl: "/ServiceIcons/SecuritySystem.png",
            color:"rgb(7, 214, 46)",
            bgColor: "rgb(7, 214, 46, 0.12)"
        },
        {
          
            heading: "Packer & Movers",
            imageUrl: "/ServiceIcons/PackerMover.png",
            color:"rgb(206, 206, 90)",
            bgColor: "rgb(206, 206, 90, 0.12)"
        },
        {
       
            heading: "Pest Control",
            imageUrl: "/ServiceIcons/PestControl.png",
            color:"rgb(255, 105, 105)",
            bgColor: "rgb(255, 105, 105, 0.12)"
        },
        {
    
            heading: "Solar Product Dealer",
            imageUrl: "/ServiceIcons/Solar.svg",
            color:"rgb(225, 174, 96)",
            bgColor: "rgb(225, 174, 96, 0.12)"
        },
       
        {
        
            heading: "Plumbing Contractor",
            imageUrl: "/ServiceIcons/Plumbing.png",
            color:"rgb(70, 130, 169)",
            bgColor: "rgb(70, 130, 169, 0.12)"
        },
        {
           
            heading: "Sanitary Dealer",
            imageUrl: "/ServiceIcons/SanitaryDealer.svg",
            bgColor: "rgb(0, 97, 253,0.12)"
        },
       
        {
      
            heading: "Flooring & Marble Dealer",
            imageUrl: "/ServiceIcons/Flooring.png",
            bgColor: "rgb(70, 69, 140, 0.12)"
        },
    ];
  return (
    <div className='flex flex-row w-full items-center gap-4 mb-6'>
    <div className='p-4 bg-red-100 w-full md:w-[45%] rounded-md'>
        <h2 className='text-lg md:text-3xl'>
            <span className=' text-amber-500 text-3xl md:text-5xl'>Explore</span> Our Services
        </h2>
        <p className='text-xs md:text-base mt-2 text-gray-700'>Make your life easier with our services</p>
        <Image 
            src="/estateblog.webp" 
            alt='estate blog' 
            width={280} 
            height={280} 
            className='my-3 w-32 h-32 md:w-40 md:h-40 lg:w-64 lg:h-[15rem]' 
        />
        <h2 className='text-lg md:text-2xl font-bold'>Get assistance in selling faster</h2>
        <p className='text-sm md:text-base mt-2 text-gray-700'>Dedicated Relationship manager to<br/> help you business faster.</p>
        <p className='text-lg md:text-2xl font-bold text-blue-600 mt-4'>List Your Business</p>
    </div>
    <div className='hidden md:grid md:grid-cols-5 w-[55%] gap-2'>
        {cardData.map((card, index) => (
            <Card key={index} imageUrl={card.imageUrl} heading={card.heading} bgColor={card.bgColor} />
        ))}
    </div>
</div>

  )
}

export default NewExploreForBlog