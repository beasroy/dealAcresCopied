import PopularProjectCard from './PopularProjectCard'
import Link from 'next/link'
import { FaAngleDown, FaExternalLinkAlt } from 'react-icons/fa'

const popularProjectContentStyle = {
  width:'100%',
  display:'flex',
  flexWrap:'wrap',
  gap: '10px',
  alignItems:'center',
 margin:'',

  
  
}

function PopularProjects() {
  return (
    <div style={{width:'100%'}}>
      <div className="md:justify-normal flex-nowrap md:flex-wrap overflow-x-auto w-full flex gap-5 md:gap-2 items-center p-1" >
        <PopularProjectCard/>
        <PopularProjectCard/>
        <PopularProjectCard/>
        <PopularProjectCard/>
      </div>
      <div className='w-1/2 py-1 rounded mt-4 flex items-center justify-center text-white font-bold bg-blue-700 gap-2  md:mx-0 '>
        <Link className='' href='#viewMore'>More <FaAngleDown size={20} style={{display: 'inline'}}/> </Link>
       
      </div>  
    </div>
  )
}

export default PopularProjects