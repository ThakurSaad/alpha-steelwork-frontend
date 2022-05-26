import React from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../assets/banner.jpg";
import bannerSm from "../../assets/bannerSm.png";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="relative">
        <div>
          <img
            src={banner}
            alt="banner"
            className="min-h-screen hidden md:block max-w-full"
          />
          <img
            src={bannerSm}
            alt="banner"
            className="min-h-screen block md:hidden max-w-full"
          />
        </div>
        <div className="absolute top-52 right-0 left-0">
          <div>
            <h1
              className="md:text-7xl text-4xl text-white font-bold text-center my-4"
              style={{
                textShadow: "0 0 50px black, 0 0 50px black, 0 0 10px yellow",
              }}
            >
              Alpha Steelwork
            </h1>
            <h2
              className="text-2xl md:text-4xl text-white font-semibold text-center my-4"
              style={{
                textShadow: "0 0 50px black, 0 0 50px black, 0 0 10px yellow",
              }}
            >
              We manufacture products with world class quality{" "}
            </h2>
          </div>
          <div className="text-center">
            <button
              className="btn btn-lg btn-primary rounded-sm text-white animate-pulse"
              onClick={() => navigate("/allTool")}
            >
              Our Products
            </button>
            <button className="btn btn-lg btn-primary rounded-sm ml-4 text-white animate-pulse"
            onClick={() => navigate("/blogs")}
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
