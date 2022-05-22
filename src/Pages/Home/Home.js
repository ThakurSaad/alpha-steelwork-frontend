import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Tools from "./Tools";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tools/>
      <Review/>
      <BusinessSummary />
    </div>
  );
};

export default Home;
