import FaqBanner from '@/components/faq/FaqBanner'
import ContactStrip from '@/components/safety/ContactStrip'
import FaqForm from '@/components/faq/FaqForm'
import FaqCategoryButton from '@/components/faq/FaqCategoryButton'
import FaqTopicList from '@/components/faq/FaqTopicList'
import ArticleSlider from '@/components/faq/ArticleSlider'

import styles from './faqPage.module.css'

import img from '../../../public/faq/faq_banner.webp'
import qna from '../../../public/faq/q&a.webp'

import { generalQuestions, questionByTopic, questionTopics } from './faqData'

import Image from 'next/image'
import ReadMore from '@/components/propertyListing/ReadMore/ReadMore'



const page = () => {

  return (
    <div>
      <FaqBanner img={img} />
      <div className='hidden md:block'>  <ContactStrip /></div>
    
      <div className='mx-auto max-w-screen-xl px-4'>
        <div className='w-full grid grid-cols-[repeat(3,160px)]  sm:grid-cols-[repeat(3,1fr)] gap-y-2 gap-1 md:gap-4 py-4 md:py-16 overflow-x-auto min-[500px]:justify-center '>

          {
            questionTopics.map((topic, index) => {

              return (<FaqCategoryButton label={topic} key={index} />)

            })
          }
        </div>

   

        <div className='lg:px-0'>


          <div className={`${styles.generalHeading} font-medium text-2xl sm:text-3xl py-4 inline-flex items-center  border-b-[4px] border-black gap-4  `}>
            <span className='h-[35px] w-[35px] md:h-[70px] md:w-[70px]'>
              <Image src={qna} alt='question and answers image' />
            </span>
            <h2>
              General Questions

            </h2>
          </div>


          <div className='w-full flex flex-col  items-start md:items-stretch lg:flex-row '>

            <div className=''>
              <ul className='list-disc py-2'>
                

                <FaqTopicList lists={generalQuestions}/>
                
                {/* {Math.ceil(generalQuestions.length/2) } more questions */}
              </ul>
            </div>


             {/* Form container */}
             <div className='relative mx-auto md:mx-0  lg:ml-auto  lg:px-4 py-3 w-full max-w-[640px]'>
              <div className='w-full'>
                <p className='font-light text-lg xs:text-xl md:text-3xl pb-2 lg:pb-3'>
                  We &apos; ll get in touch with you.
                </p>
                <FaqForm />
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* How deal acres help you */}

      <div className='bg-blue-600'>
        <div className=' max-w-screen-xl px-4 py-8  text-white mx-auto '>

        <h3 className='font-bold text-2xl xs:text-3xl text-center py-4'>How Deal Acres Help You? </h3>
          <p className='font-medium text-justify text-sm sm:text-base '>Welcome to the Deal Acres FAQ (Frequently Asked Questions) page, where buyers and owners can find answers to their questions related to login or registration, property search, property advertisement posting, account management and other related topics. Start your search by simply entering keywords in the search bar, located at the top of the page or you can browse through questions under the categories given below. Alternatively, you can also reach out to us at  7015963201, 8307757571 (Monday to Saturday, 9 AM to 9 PM) to talk to our customer support executive. Additionally, you can also explore the Articles section below, for the latest real estate news and updates.</p>
        </div>
      </div>

      {/* Explore questions by Topic */}

      <div className='bg-[#e4eefb] py-4 px-4 lg:py-6'>
        <h3 className='text-center uppercase py-2 lg:py-4 text-lg xs:text-2xl lg:text-3xl font-bold'> Explore Questions by Topics</h3>
        <div className=' max-w-screen-xl  md:py-4 lg:py-8 mx-auto  lg:grid lg:grid-cols-3 items-start'>
          {questionByTopic.map((item, index) => {
            return (
              <FaqTopicList isGrid key={index} hasBorder={index !== 2} title={item.title} lists={item.lists} index={index} />
            )
          })}

        </div>

      </div>
      <div className='bg-blue-600 flex flex-col md:flex-row items-center justify-center gap-6 p-5'>
          <div className='uppercase'>
          <h1 className='text-xs md:text-lg text-white font-bold'> BUY OUR REAL ESTATE SERVICES AND SMOOTH YOUR <br />
          <span className='text-2xl md:text-5xl text-yellow-400 font-bold'>REAL ESTATE JOURNEY</span></h1>
          </div>
          <div>
            <button className='rounded-md bg-white px-6 py-2 text-blue-500 font-semibold'>Click Here</button>
          </div>
      </div>

      {/* Article Slider */}

      <div className='max-w-screen-xl mx-auto px-4 my-8'>
     

        {/* <ArticleSlider /> */}
        <ReadMore isFullScreen={true} header='Articles'/>

        {/* Add Interesting Readings Here remove the article slider */}
      </div>





    </div>
  )
}

export default page
