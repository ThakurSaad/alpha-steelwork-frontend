import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Customer from "./Customer";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./reviews.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Review = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch("https://infinite-basin-98544.herokuapp.com/reviews").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="pt-32 mx-auto">
      <h2 className="text-5xl font-semibold text-center">Customer Feedback</h2>
      {/* <div className="grid gird-cols-1 justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 md:mx-4 rounded-md mt-4">
        {reviews.map((review) => (
          <Customer key={review._id} review={review} />
        ))}
      </div> */}

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <Customer />
        </SwiperSlide> */}
        {reviews.map((review) => (
          <SwiperSlide>
            <Customer key={review._id} review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
