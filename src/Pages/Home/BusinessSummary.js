import {
  faArrowAltCircleRight,
  faFlag,
  faMoneyBillTrendUp,
  faPeopleGroup,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import buisnessBg from "../../assets/buisness-bg.jpg";
import Stats from "./Stats";

const BusinessSummary = () => {
  return (
    <section
      style={
        {
          // background: `url(${buisnessBg})`,
          // backgroundSize: "cover",
          // backgroundRepeat: "repeat-y",
        }
      }
    >
      <h2 className="text-5xl font-semibold text-center pb-20 pt-32">
        We have acquired trust all over the world
      </h2>
      <div className="grid grid-cols-1 gap-y-12 justify-items-center lg:grid-cols-4">
        <div className="text-center">
          <FontAwesomeIcon icon={faFlag} size="4x" className="" />
          <p className="font-bold text-5xl my-5">40+ </p>
          <h5 className="font-semibold text-3xl">Countries</h5>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faPeopleGroup} size="4x" className="" />
          <p className="font-bold text-5xl my-5">100+ </p>
          <h5 className="font-semibold text-3xl">Customers</h5>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faMoneyBillTrendUp} size="4x" className="" />
          <p className="font-bold text-5xl my-5">350M+ </p>
          <h5 className="font-semibold text-3xl">Revenue/y</h5>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faScrewdriverWrench} size="4x" className="" />
          <p className="font-bold text-5xl my-5">75+ </p>
          <h5 className="font-semibold text-3xl">Tools</h5>
        </div>
      </div>
      <Stats />

      <div className="max-w-screen-sm w-full lg:w-2/4 flex justify-evenly items-center mx-auto mt-12 px-2">
        <h2 className="font-semibold text-2xl">Connect with us Now</h2>
        <button className="btn btn-lg btn-primary text-white animate-pulse">
          Contact Us
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            size="lg"
            className="ml-4"
          />
        </button>
      </div>
    </section>
  );
};

export default BusinessSummary;
