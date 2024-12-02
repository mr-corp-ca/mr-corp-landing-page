import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const SwiperSectionSlider = () => {
  const cards = [
    {
      id: 1,
      name: "Lucky member",
      drawDate: "10-28-2023",
      image: "/swiper_card.png", // Replace with your image URL
    },
    {
      id: 2,
      name: "Lucky member",
      drawDate: "11-15-2023",
      image: "/swiper_card.png",
    },
    {
      id: 3,
      name: "Lucky member",
      drawDate: "12-01-2023",
      image: "/swiper_card.png",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      // navigation
      // pagination={{ clickable: true }}
      spaceBetween={20}
      breakpoints={{
        200: { slidesPerView: 1 },
      }}
      // className="w-full px-4 pt-[64px] pb-5"
    >
      {Array(10)
        .fill()
        .map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={"/swiper_card.png"}
              className="w-[238px] h-[349px]"
              alt="img"
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SwiperSectionSlider;
