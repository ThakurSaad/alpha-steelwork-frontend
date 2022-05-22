import React from "react";
import banner from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <section>
      <div className="relative">
        <div>
          <img src={banner} alt="banner" className="max-h-full max-w-full" />
        </div>
        <div className="absolute top-52 right-0 left-0">
          <div>
            <h1 className="text-7xl text-white font-bold text-center my-4">
              Welcome to Alpha Steelwork
            </h1>
            <h2 className="text-4xl text-white font-semibold text-center my-4">
              We manufacture products with world class quality{" "}
            </h2>
          </div>
          <div className="text-center">
            <button class="btn btn-lg btn-primary">Our solutions</button>
            <button class="btn btn-lg btn-primary ml-4">Read more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
