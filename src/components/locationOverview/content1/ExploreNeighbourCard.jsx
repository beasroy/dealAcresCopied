import styles from './exploreNeighbourCard.module.css'

function ExploreNeighbourCard(props) {
  return (
    <div className={`container_box_shadow py-1 md:py-3 px-2 md:px-4 border border-[#00000038] rounded-[1rem] `}>
        <h6 className='text-sm sm:text-base md:text-lg font-bold text-center whitespace-nowrap py-1'>{props.title}</h6>
        <ul className='px-1 list-disc text-xs sm:text-sm md:text-base'>
            <li>St. Michaels Sr. Secondary School</li>
            <li>Govt sec school</li>
            <li>Dronacharya Government College</li>
        </ul>
    </div>
  )
}

export default ExploreNeighbourCard