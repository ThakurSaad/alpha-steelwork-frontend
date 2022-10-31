import React from "react";

// images
import thakur from "../../assets/thakur.jpeg";
import burhan from "../../assets/burhan.jpg";
import jakir from "../../assets/jakir.jpg";
import mash from "../../assets/mash.jpg";
import shujon from "../../assets/shujon.jpg";
import fonoy from "../../assets/fonoy.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import styles from "./SwiperStyles/Benefactors.module.css";

// import required modules
import { EffectCube, Pagination } from "swiper";
import Benefactor from "./Benefactor";

const Benefactors = () => {
  const benefactors = [
    {
      _id: 1,
      name: "Thakur Saad",
      image: thakur,
      profession: "Software Developer",
      speech:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus a necessitatibus? Hic magnam esse voluptatibus quaerat, repudiandae quam nihil voluptate fugit!",
    },
    {
      _id: 2,
      name: "Kazi Samia",
      image: burhan,
      profession: "Investor",
      speech:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus a necessitatibus? Hic magnam esse voluptatibus quaerat, repudiandae quam nihil voluptate fugit!",
    },
    {
      _id: 3,
      name: "Zaowad Nasif",
      image: jakir,
      profession: "Marine Investor",
      speech:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus a necessitatibus? Hic magnam esse voluptatibus quaerat, repudiandae quam nihil voluptate fugit!",
    },
    {
      _id: 4,
      name: "Jannatul Maisha",
      image: mash,
      profession: "Business Analyst",
      speech:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus a necessitatibus? Hic magnam esse voluptatibus quaerat, repudiandae quam nihil voluptate fugit!",
    },
    {
      _id: 5,
      name: "Aditto Roy",
      image: shujon,
      profession: "Chef & Investor",
      speech:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus a necessitatibus? Hic magnam esse voluptatibus quaerat, repudiandae quam nihil voluptate fugit!",
    },
    {
      _id: 6,
      name: "Fonoy Acharjee",
      image: fonoy,
      profession: "Software Engineer",
      speech:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus a necessitatibus? Hic magnam esse voluptatibus quaerat, repudiandae quam nihil voluptate fugit!",
    },
  ];

  return (
    <>
      <h2 className="text-5xl font-semibold text-center pt-32">
        Our Benefactors
      </h2>
      <section className="grid md:grid-cols-2 lg:mx-32">
        <section className="hidden md:block"></section>
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
              {benefactors.map((benefactor) => (
                <SwiperSlide key={benefactor._id}>
                  <Benefactor benefactor={benefactor} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </section>
    </>
  );
};

export default Benefactors;
