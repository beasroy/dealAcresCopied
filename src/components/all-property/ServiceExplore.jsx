import Image from "next/image"

function ServiceExplore() {
  return (
    <div className="flex flex-row gap-3 items-center bg-blue-900 p-6 rounded-lg">
      <h1 className="text-[1.2rem] font-bold text-white col-span-3 mb-8 ">Explore Our Services{`...`}</h1>
      <div className="relative">
        <div className="relative h-48 w-32 overflow-hidden rounded-lg cursor-pointer border-4 border-white">
          <Image
            src='/singleDeveloper/CommercialProjectsImg.webp'
            alt='Commercial Projects'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <h6 className="absolute bottom-0 left-0 right-0 h-[30px] flex items-center justify-center text-black font-bold rounded-2xl bg-white/90 p-1 opacity-90 ">Home Loan</h6>
      </div>

      <div className="relative">
        <div className="relative h-48 w-32 overflow-hidden rounded-lg cursor-pointer border-4 border-white">
          <Image
            src='/singleDeveloper/ResidentialProjectsImg.webp'
            alt='Residential Projects'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <h6 className="absolute bottom-0 left-0 right-0 h-[30px]flex items-center justify-center text-center text-black font-bold rounded-2xl bg-white/90 p-1 opacity-90 ">Home Decor</h6>
      </div>
      
      <div className="relative">
        <div className="relative h-48 w-32 overflow-hidden rounded-lg cursor-pointer border-4 border-white">
          <Image
            src='/singleDeveloper/ResidentialProjectsImg.webp'
            alt='Residential Projects'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <h6 className="absolute bottom-0 left-0 right-0 h-[30px] flex items-center justify-center text-black font-bold rounded-2xl bg-white/90  opacity-90 ">Home Interior</h6>
      </div>
    </div>
  )
}

export default ServiceExplore
