import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import axios from "axios";

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
};

const SwiperSectionSlider = ({ publicWinners, setPublicWinners }) => {
  const [openLuckyPopup, setOpenLuckyPopup] = useState(false);
  const [selectedLuckyUser, setSelectedLuckyUser] = useState({});
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
    <>
      <div className="overflow-x-hidden w-full px-0">
        <Swiper
          loop={true}
          slidesPerView={"auto"}
          // pagination={true}
          // modules={[Pagination]}
          // pagination={{
          //   clickable: true,
          //   renderBullet: (index, className) => {
          //     // Only render a maximum of 4 pagination dots
          //     if (index >= 4) return null; // Hide pagination dots beyond the 4th index
          //     return `<span class="${className}">${index + 1}</span>`;
          //   },
          // }}
          // breakpoints={{
          //     0: {
          //         slidesPerView: 1,
          //         spaceBetween: 0,
          //     },
          //     640: {
          //         slidesPerView: 2,
          //         spaceBetween: 0,
          //     },

          //     768: {
          //         slidesPerView: 3,
          //         spaceBetween: 0,
          //     },

          //     1024: {
          //         slidesPerView: 4,
          //         spaceBetween: 0,
          //     },
          //     1280: {
          //         slidesPerView: 5,
          //         spaceBetween: 0,
          //     }
          // }}
          className="mySwiper"
        >
          {/* <>Hwllo</> */}
          {publicWinners?.data?.length > 0 ? (
            publicWinners?.data?.map((data, index) => (
              <SwiperSlide key={index}>
                <div className=" w-[90vw] sm:w-[45vw] md:w-[30vw]  lg:w-[22.5vw] xl:w-[18vw] flex items-center justify-center min-h-64 ">
                  <div className="flex items-center justify-center cursor-pointer transition-all rounded-full">
                    <div className="border-[#F33F41] group border rounded-[10px] cursor-pointer relative w-52 hover:scale-110 h-60 hover:h-64 p-1 transition-all">
                      <div className="h-full  pt-3 w-full  overflow-hidden flex justify-center ">
                        <img
                          className="w-24 h-24 sm:w-24 sm:h-24 md:w-24 md:h-24 border-2 border-red-500 rounded-full object-cover"
                          src={
                            data?.user?.logo !== null
                              ? data?.user?.logo
                              : "/profile.png"
                          }
                        />
                      </div>
                      <div className="bg-[#ffffffe1] shadow-xl max-h-[5.625rem] absolute top-[50%] rounded-xl w-[95%] left-1/2 -translate-x-1/2 p-2 text-center space-y-2">
                        <h3 className="text-[#F33F41] font-semibold text-xl text-ellipsis whitespace-nowrap overflow-hidden   ">
                          {data?.user?.full_name}
                        </h3>
                        <div className="font-semibold text-gray-500 flex items-center gap-2 justify-center">
                          <span className="text-xs">
                            {/* {t("luckiest_section.draw_date")}{" "} */}
                            Draw date
                          </span>{" "}
                          <span className="text-gray-600 font-medium text-sm">
                            {formatDate(data?.created_at)}
                          </span>
                        </div>
                        <button
                          type="button"
                          // text={t("common:view_details")}
                          // handleClick={() => {
                          //   setOpenLuckyPopup(true);
                          //   setSelectedLuckyUser(data);
                          // }}
                          onClick={() => {
                            setOpenLuckyPopup(true);
                            setSelectedLuckyUser(data);
                          }}
                          className={
                            "!rounded-lg px-5 p-2 group-hover:!rounded-full !text-sm text-white customColor"
                          }
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <div className="flex items-center justify-center pt-12 text-xl">
              No luckiest as of now
            </div>
          )}
        </Swiper>
      </div>

      {openLuckyPopup && (
        <div className="fixed inset-0 p-40 lg:px-20 sm:px-10 px-2 bg-[#0008] flex justify-center items-center z-50">
          <div className="px-6 py-6 sm:w-[28.125rem] w-[21.875rem] relative bg-white h-fit rounded-xl">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold text-gray-900">Message</h3>
              <span
                onClick={() => {
                  setOpenLuckyPopup(false);
                  setSelectedLuckyUser({});
                }}
                className="cursor-pointer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="gap-3 py-5 flex justify-center flex-col w-full sm:w-[380px] m-auto">
              <div className="flex items-center gap-4">
                <img
                  className="w-11 h-11 sm:w-24 sm:h-24 md:w-24 md:h-24 border-2 border-red-500 rounded-full object-cover"
                  src={
                    selectedLuckyUser?.user?.logo !== null
                      ? selectedLuckyUser?.user?.logo
                      : "/profile.png"
                  }
                />
                <div className="flex flex-col gap-1">
                  <h1 className="text-md font-bold">
                    {selectedLuckyUser?.user?.full_name}
                  </h1>
                  <p className="text-sm font-medium">
                    {formatDate(selectedLuckyUser?.created_at)}
                  </p>
                </div>
              </div>
              <div className="flex border-red-500 border rounded-full justify-around items-center py-2 my-3">
                <div>
                  <h2 className="text-sm text-black font-semibold">Province</h2>
                  <p className="text-sm text-[#c1c1c1] font-semibold">
                    {selectedLuckyUser?.province?.name}
                  </p>
                </div>
                <div>
                  <h2 className="text-sm text-black font-semibold">
                    Purchase Slots
                  </h2>
                  <p className="text-sm text-[#c1c1c1] font-semibold">
                    {selectedLuckyUser?.province?.slot}
                  </p>
                </div>
              </div>
              <div>
                <h1 className="text-red-500 lg:text-lg text-base font-bold">
                  Gift:{" "}
                </h1>
                <p>One Year grocery gift from MR.</p>
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  setSelectedLuckyUser({});
                  setOpenLuckyPopup(false);
                }}
                className={"w-full px-4 py-2 rounded-lg customColor text-white"}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SwiperSectionSlider;
