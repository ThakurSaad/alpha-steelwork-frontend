import React from "react";
import feedbackBg from "../../assets/parts-bg.jpg";
import Customer from "./Customer";

const Review = () => {
  return (
    <section
      style={{
        background: `url(${feedbackBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat-y",
      }}
      className="py-32"
    >
      <h2 className="text-5xl font-semibold text-center">Customer Feedback</h2>
      <div className="grid gird-cols-1 justify-items-center gap-8 lg:grid-cols-3 mx-8 lg:mx-8 rounded-md mt-4 p-4">
        <Customer />
        <Customer />
        <Customer />
        <Customer />
        <Customer />
        <Customer />
      </div>
    </section>
  );
};

export default Review;
