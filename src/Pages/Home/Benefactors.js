import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import styles from "./SwiperStyles/Benefactors.module.css";

// import required modules
import { EffectCube, Pagination } from "swiper";

const Benefactors = () => {
  const benefactor = [
    {
      name: "Thakur Saad",
      image: "../../assets/thakur.jpeg",
      speech:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus a necessitatibus? Hic magnam esse voluptatibus quaerat, repudiandae quam nihil voluptate fugit!",
    },
    {
      name: "Kazi Samia",
      image: "../../assets/burhan.jpg",
      speech:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus a necessitatibus? Hic magnam esse voluptatibus quaerat, repudiandae quam nihil voluptate fugit!",
    },
    {
      name: "Zaowad Nasif",
      image: "../../assets/jakir.jpg",
      speech:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus a necessitatibus? Hic magnam esse voluptatibus quaerat, repudiandae quam nihil voluptate fugit!",
    },
    {
      name: "Jannatul Maisha",
      image: "../../assets/mash.jpg",
      speech:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus a necessitatibus? Hic magnam esse voluptatibus quaerat, repudiandae quam nihil voluptate fugit!",
    },
    {
      name: "Aditto Roy",
      image: "../../assets/shujon.jpg",
      speech:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus a necessitatibus? Hic magnam esse voluptatibus quaerat, repudiandae quam nihil voluptate fugit!",
    },
  ];

  return (
    <section>
      <h2 className="text-5xl font-semibold text-center pt-32">
        Our Benefactors
      </h2>
      <section className="h-[400px] sm:h-[450px]">
        <div className="relative lg:h-[500px]">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className={`mySwiper ${styles.swiper}`}
          >
            <SwiperSlide className={styles.swiperSlide}>
              <div className="w-[300px] h-[300px] bg-accent rounded-md"></div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </section>
  );
};

export default Benefactors;
