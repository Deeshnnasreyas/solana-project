import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { slides } from "../../constants";

const SwipperCommunity = () => {
  return (
    <div className="thriving-community-section bg-[#000000] w-[100%] h-[500px] pb-[74px]">
      <div>
        <div className="container pb-20">
          <h2 className="text-white text-[32px] leading-[46.2px] font-normal pl-8 pb-10">
            Join a thriving community.
          </h2>
        </div>
        {/* swiper section */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={4}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="relative w-full h-[400px] rounded-md"
            >
              {slide.type === "text" ? (
                <div>
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-[200px] object-cover rounded-lg shadow-lg"
                  />
                  <div className="text-center justify-center bg-black w-full h-[200px] pt-10 gap-[9px]">
                    <h2 className="text-[#19FB9B] text-[42px] font-normal leading-[46.2px]">
                      {slide.stats.number}
                    </h2>
                    <p className="text-[#BABABA] text-[12px] normal leading-[15.36px]">
                      {slide.stats.text}
                    </p>
                  </div>
                </div>
              ) : (
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwipperCommunity;
