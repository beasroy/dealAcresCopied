import Cities from '@/components/Homepage/Cities/Cities'
import CategoryFaq from '@/components/invest/CategoryFaq'
import InvestBanner from '@/components/invest/InvestBanner'
import InvestmentOptionsCard from '@/components/invest/InvestmentOptionsCard'
import InvestmentGuideCard from '@/components/invest/InvestmentGuideCard'
import IntrestingReading from '@/components/locationOverview/content2/IntrestingReads'
import src1 from '../../../public/invest/commercial-projects.webp'
import src2 from '../../../public/invest/new-launch.webp'
import src3 from '../../../public/invest/shop-cum-office.webp'
import src4 from '../../../public/invest/rental-shop.webp'
import src5 from '../../../public/invest/office-space.webp'
import src6 from '../../../public/invest/invest-in-plot.webp'
import src7 from '../../../public/invest/trusted-builder.webp'
import pic1 from '../../../public/invest/pic1.webp'
import pic2 from '../../../public/invest/pic2.jpg'
import pic3 from '../../../public/invest/pic3.webp'
import pic4 from '../../../public/invest/pic4.webp'
import ArticleSlider from '@/components/faq/ArticleSlider'

const InvestWithDealAcres = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4'>
      <InvestBanner />

      {/* choose investment options */}
      <div className='max-w-screen-lg mx-auto px-2 sm:px-4'>
        <div className='text-sm sm:text-base md:text-lg text-justify'>
          Investing with Deal Acres in real estate is a wise choice. Our team provides expert guidance and access to prime properties, making your investment journey hassle-free. With our proven track record, you can trust us to find lucrative opportunities. Plus, our personalized approach ensures your unique goals are met. Make your real estate investments confident – choose Deal Acres for a secure and rewarding experience.
        </div>


        {/* choose investment options */}
        <div className='hidden '>
          <h3 className='py-4 font-bold text-lg  sm:text-2xl md:text-3xl mb-1'>
            Choose Investment Options
          </h3>
          <div className='md:flex hidden gap-8 pb-8 md:flex-nowrap'>
            <InvestmentOptionsCard title={"Commercial Projects"} src={src1} bgColor={'bg-[#f1fbec]'} />
            <InvestmentOptionsCard title={"New Launch Projects"} src={src2} bgColor={'bg-[#f1fbec]'} />
            <InvestmentOptionsCard title={"Shop Cum Office"} src={src3} bgColor={'bg-[#f1fbec]'} />
          </div>

          <div className='md:flex hidden gap-8 pb-8 md:flex-nowrap'>
            <InvestmentOptionsCard title={"Rental Shops"} src={src4} bgColor={'bg-[#addcef]'} />
            <InvestmentOptionsCard title={"Office Space"} src={src5} bgColor={'bg-[#addcef]'} />
            <InvestmentOptionsCard title={"Invest in Plot"} src={src6} bgColor={'bg-[#addcef]'} />
          </div>

          <div className='md:flex hidden gap-8 pb-8 md:flex-nowrap'>
            <InvestmentOptionsCard title={"Trusted Builders"} src={src7} bgColor={'bg-[#ffd7ca]'} />

          </div>
        </div>
        <div>
          <h3 className='py-4 font-bold text-lg  sm:text-2xl md:text-3xl'>
            Choose Investment Options
          </h3>

          <div className='grid grid-cols-2 xs:grid-cols-[repeat(2,170px)] sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-8 overflow-x-auto'>
            <InvestmentOptionsCard title={"Commercial Projects"} src={src1} bgColor={'bg-[#f1fbec]'} />
            <InvestmentOptionsCard title={"New Launch Projects"} src={src2} bgColor={'bg-[#f1fbec]'} />
            <InvestmentOptionsCard title={"Shop Cum Office"} src={src3} bgColor={'bg-[#f1fbec]'} />



            <InvestmentOptionsCard title={"Rental Shops"} src={src4} bgColor={'bg-[#addcef]'} />
            <InvestmentOptionsCard title={"Office Space"} src={src5} bgColor={'bg-[#addcef]'} />
            <InvestmentOptionsCard title={"Invest in Plot"} src={src6} bgColor={'bg-[#addcef]'} />



            <InvestmentOptionsCard title={"Trusted Bilders"} src={src7} bgColor={'bg-[#ffd7ca]'} />

          </div>
        </div>



        {/* dive into this ... */}
        <div className='hidden md:block'>
          <h3 className='py-2 font-bold text-xl md:text-3xl mt-4'>
            Dive into this Investment Guide: And Start Investing
          </h3>
          <p className='text-lg md:text-xl mb-2'>
            Know what is right for you from experts
          </p>

          <div className='flex flex-wrap justify-center md:flex-row md:flex-nowrap gap-8 md:gap-6 items-stretch md:items-start md:justify-start py-8'>
            <InvestmentGuideCard src={pic1} title={"Why to invest in commercial Real Estate ?"} content={"Investing in a pre-leased asset may also be a good option as it can start generating revenue instantly."} />
            <InvestmentGuideCard src={pic2} title={"Why to invest in pre-lease property?"} content={"Investing in a pre-leased asset may also be a good option as it can start generating revenue instantly."} />
            <InvestmentGuideCard src={pic3} title={"How to grow wealth with commercial investment ?"} content={"Investing in a pre-leased asset may also be a good option as it can start generating revenue instantly."} />
            <InvestmentGuideCard src={pic4} title={"All about commercial lease guarantee in India"} content={"Investing in a pre-leased asset may also be a good option as it can start generating revenue instantly."} />
          </div>

        </div>
        <div className='mt-4 md:mt-8 md:hidden'>
          <h3 className='pt-2 font-bold text-lg leading-[normal]  sm:text-2xl md:text-4xl'>
            Dive into this Investment Guide: And Start Investing
          </h3>
          <p className='text-sm sm:text-base md:text-2xl pb-2 '>
            Know what is right for you from experts
          </p>


          <div className='grid grid-cols-[repeat(4,175px)] xs:grid-cols-[repeat(4,200px)]  overflow-x-auto    gap-2 md:gap-4  items-start md:justify-start py-4 sm:py-8 pl-1'>
            <InvestmentGuideCard src={pic1} title={"Why to invest in commercial  Real Estate ?"} content={"Investing in a pre-leased asset may also be a good option as it can start generating revenue instantly."} />

            <InvestmentGuideCard src={pic2} title={"Why to invest in pre-lease property?"} content={"Investing in a pre-leased asset may also be a good option as it can start generating revenue instantly."} />

            <InvestmentGuideCard src={pic3} title={"How to grow wealth with commercial investment ?"} content={"Investing in a pre-leased asset may also be a good option as it can start generating revenue instantly."} />

            <InvestmentGuideCard src={pic4} title={"All about commercial lease gurantee in india"} content={"Investing in a pre-leased asset may also be a good option as it can start generating revenue instantly."} />

          </div>
        </div>

        <div className='md:max-w-[80%] min-[1000px]:max-w-full md:mx-auto '>
          <h3 className='text-lg  sm:text-2xl md:text-3xl font-bold py-4 mb-1'>
            Explore Real Estate in Popular Indian Top Cities
          </h3>
          <Cities />
        </div>
        <div className='py-2'>
          <h3 className='text-lg  sm:text-2xl md:text-3xl font-bold pb-4'>
            Frequently Asked Questions
          </h3>
          <CategoryFaq />
        </div>

        <h3 className='font-bold text-xl md:text-3xl py-4 '>
          Interesting Reads
        </h3>
        {/* <IntrestingReading/> */}
        <div className='mb-10'> <ArticleSlider /></div>

      </div>
    </div>
  )
}

export default InvestWithDealAcres



