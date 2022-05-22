import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Tools from "./Tools";
import Review from "./Review";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <div>
      <Banner />
      <Welcome/>
      <Tools/>
      <Review/>
      <BusinessSummary />
    </div>
  );
};

export default Home;
