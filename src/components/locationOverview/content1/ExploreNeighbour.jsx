import ExploreNeighbourCard from './ExploreNeighbourCard'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import './exploreslider.css'
function ExploreNeighbour() {

  const ExploreData = [
    <ExploreNeighbourCard key={1} title='Schools & Colleges'/>,
    <ExploreNeighbourCard key={2} title='Market'/>,
    <ExploreNeighbourCard key={3} title='Hospitals'/>,
    <ExploreNeighbourCard key={4} title='Transport'/>,
    <ExploreNeighbourCard key={5} title='Park'/>,
    <ExploreNeighbourCard key={6} title='Offices'/>
  ];

  return (
    <div className="">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}

          modules={[Pagination, Navigation]}
          pagination={{ enabled: false, horizontalClass: 'neighbourSwiperDots'
           }}
          navigation={{
            enabled: false
          }}
          className="py-2"

          breakpoints={
            {

              320: {
                slidesPerView: 2,
                spaceBetween: 8,
                pagination: {
                  enabled: true
                },
                
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 12
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
                pagination: {
                  enabled: false
                },
                navigation: {
                  enabled: true
                }
                
              },
              960: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }
          
          }

        >
          {ExploreData.map((dt, index) => (<SwiperSlide key={index} className="">{dt}</SwiperSlide>))}
        </Swiper>


    </div>
  )
}

export default ExploreNeighbour