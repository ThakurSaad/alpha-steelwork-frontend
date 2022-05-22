import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <Review/>
      <BusinessSummary />
    </div>
  );
};

export default Home;
