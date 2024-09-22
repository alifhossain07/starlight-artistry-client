import React, { useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const Banner = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="lg:grid flex flex-col py-10 bg-[#f7f5f1]  lg:grid-cols-2 gap-4 items-center  ">
      {/* Intro Banner */}
      <div className="p-2 space-y-8 ml-16 w-full ">
        <div className="lg:text-4xl text-2xl text-[#674636] font-mont font-bold mb-2">
          <Typewriter
            words={['Handcrafted Wonders, Made for You']}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={3000}
          />
        </div>
        <p className="text-xl text-[#928360] font-lora">
          Explore a curated collection of unique, handcrafted art and craft
          items, each lovingly made to inspire your creativity and elevate your
          space. Discover your next favorite piece at Starlight Artistry!
        </p>
        <button className='btn text-white bg-[#795757]'>Learn More About Us</button>
      </div>

      {/* Most Awaited Slider */}
      <div className=" w-9/12 mx-auto ">
        <Swiper
          ref={swiperRef}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}"></span>`;
            },
          }}
          navigation={false}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mt-8"
        >
          <SwiperSlide>
            <img src="/assets/images/slider1.jpg" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/images/slider4.jpg" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/images/slider2.jpg" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/images/slider6.jpg" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/images/slider3.png" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/images/slider5.jpg" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/images/slider7.jpg" alt="slide_image" />
          </SwiperSlide>

          {/* Slider Control Arrows */}
          <div className="slider-controler">
            <div className="swiper-button-prev slider" onClick={handlePrev}>
              {/* You can add icons inside these divs */}
            </div>

            <div className="swiper-button-next slider" onClick={handleNext}>
              {/* You can add icons inside these divs */}
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
