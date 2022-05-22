import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Tools from "./Tools";
import Review from "./Review";
import Welcome from "./Welcome";
import Benefits from "./Benefits";

const Home = () => {
  return (
    <div>
      <Banner />
      <Welcome/>
      <Benefits/>
      <Tools/>
      <Review/>
      <BusinessSummary />
    </div>
  );
};

export default Home;
