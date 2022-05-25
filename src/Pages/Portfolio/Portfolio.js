import React from "react";
import Profile from "./Profile";
import ProfileDetails from "./ProfileDetails";

const Portfolio = () => {
  return (
    <section className="min-h-screen">
      <h2 className="text-5xl font-bold text-center py-8">Portfolio</h2>
      <Profile />
      <ProfileDetails />
    </section>
  );
};

export default Portfolio;
