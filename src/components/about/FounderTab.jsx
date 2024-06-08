import Image from 'next/image'


const FounderTab = ({img, content, altText}) => {
  return (

    <div className={`bg-[#EFF5FE]  p-4 md:p-16 rounded-lg flex flex-col ${img ?  'sm:grid grid-cols-12' : 'bg-white'}  gap-8
    items-stretch
    
    `}>
  
      {img && <div className={`relative col-span-5 overflow-hidden min-h-[240px] max-h-[320px] sm:min-h-[300px] sm:max-h-[400px] `}>
        <Image src={img} alt={"any "} className='absolute object-center min-h-full w-full sm:w-auto h-auto'/>
      </div>}
      <p className={`text-sm sm:text-base md:text-lg text-justify col-span-7 justify-self-start max-sm:[word-spacing:-1px] `}>
        {content}
      </p>
    </div>
  )
}

export default FounderTab
