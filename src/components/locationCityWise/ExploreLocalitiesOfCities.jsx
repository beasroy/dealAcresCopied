import React from "react";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ExploreLocalitiesOfCities = () => {
  return (
    <div className="w-full mb-8">
      <div className="w-fit mb-6">
        <h1 className="text-3xl font-semibold max-lg:text-2xl">
          Explore Localities of Gurgaon
        </h1>
        <div className="w-[40%] mt-2 h-1 bg-yellow-500"></div>
      </div>

      <div className="mt-5 w-full">
        <Swiper
          spaceBetween={16}
          modules={[Pagination]}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            798: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <div class="grid-row-2 grid gap-4 p-2">
              <div class="flex flex-row items-start space-x-2">
                <img
                  src="https://cdn.britannica.com/48/116548-050-3DA31589/India-Gate-New-Delhi.jpg"
                  class="h-16 w-16 rounded-lg"
                />
                <div class="flex flex-col">
                  <p class="text-lg font-bold">Gurugram</p>
                  <p class="text-md text-gray-600">Property in Gurgaon</p>
                </div>
              </div>

              <div class="flex flex-row items-start space-x-2">
                <img
                  src="https://cdn.britannica.com/48/116548-050-3DA31589/India-Gate-New-Delhi.jpg"
                  class="h-16 w-16 rounded-lg"
                />
                <div class="flex flex-col">
                  <p class="text-lg font-bold">Gurugram</p>
                  <p class="text-md text-gray-600">Property in Gurgaon</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="grid-row-2 grid gap-4 p-2">
              <div class="flex flex-row items-start space-x-2">
                <img
                  src="https://cdn.britannica.com/48/116548-050-3DA31589/India-Gate-New-Delhi.jpg"
                  class="h-16 w-16 rounded-lg"
                />
                <div class="flex flex-col">
                  <p class="text-lg font-bold">Gurugram</p>
                  <p class="text-md text-gray-600">Property in Gurgaon</p>
                </div>
              </div>

              <div class="flex flex-row items-start space-x-2">
                <img
                  src="https://cdn.britannica.com/48/116548-050-3DA31589/India-Gate-New-Delhi.jpg"
                  class="h-16 w-16 rounded-lg"
                />
                <div class="flex flex-col">
                  <p class="text-lg font-bold">Gurugram</p>
                  <p class="text-md text-gray-600">Property in Gurgaon</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="grid-row-2 grid gap-4 p-2">
              <div class="flex flex-row items-start space-x-2">
                <img
                  src="https://cdn.britannica.com/48/116548-050-3DA31589/India-Gate-New-Delhi.jpg"
                  class="h-16 w-16 rounded-lg"
                />
                <div class="flex flex-col">
                  <p class="text-lg font-bold">Gurugram</p>
                  <p class="text-md text-gray-600">Property in Gurgaon</p>
                </div>
              </div>

              <div class="flex flex-row items-start space-x-2">
                <img
                  src="https://cdn.britannica.com/48/116548-050-3DA31589/India-Gate-New-Delhi.jpg"
                  class="h-16 w-16 rounded-lg"
                />
                <div class="flex flex-col">
                  <p class="text-lg font-bold">Gurugram</p>
                  <p class="text-md text-gray-600">Property in Gurgaon</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="grid-row-2 grid gap-4 p-2">
              <div class="flex flex-row items-start space-x-2">
                <img
                  src="https://cdn.britannica.com/48/116548-050-3DA31589/India-Gate-New-Delhi.jpg"
                  class="h-16 w-16 rounded-lg"
                />
                <div class="flex flex-col">
                  <p class="text-lg font-bold">Gurugram</p>
                  <p class="text-md text-gray-600">Property in Gurgaon</p>
                </div>
              </div>

              <div class="flex flex-row items-start space-x-2">
                <img
                  src="https://cdn.britannica.com/48/116548-050-3DA31589/India-Gate-New-Delhi.jpg"
                  class="h-16 w-16 rounded-lg"
                />
                <div class="flex flex-col">
                  <p class="text-lg font-bold">Gurugram</p>
                  <p class="text-md text-gray-600">Property in Gurgaon</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="grid-row-2 grid gap-4 p-2">
              <div class="flex flex-row items-start space-x-2">
                <img
                  src="https://cdn.britannica.com/48/116548-050-3DA31589/India-Gate-New-Delhi.jpg"
                  class="h-16 w-16 rounded-lg"
                />
                <div class="flex flex-col">
                  <p class="text-lg font-bold">Gurugram</p>
                  <p class="text-md text-gray-600">Property in Gurgaon</p>
                </div>
              </div>

              <div class="flex flex-row items-start space-x-2">
                <img
                  src="https://cdn.britannica.com/48/116548-050-3DA31589/India-Gate-New-Delhi.jpg"
                  class="h-16 w-16 rounded-lg"
                />
                <div class="flex flex-col">
                  <p class="text-lg font-bold">Gurugram</p>
                  <p class="text-md text-gray-600">Property in Gurgaon</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <div className="pt-10">
            <div class="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ExploreLocalitiesOfCities;
