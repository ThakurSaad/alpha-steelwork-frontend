import React from "react";
import { useQuery } from "react-query";
// import feedbackBg from "../../assets/parts-bg.jpg";
import Loading from "../Shared/Loading";
import Customer from "./Customer";

const Review = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch("https://infinite-basin-98544.herokuapp.com/reviews").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section
      style={
        {
          // background: `url(${feedbackBg})`,
          // backgroundSize: "cover",
          // backgroundRepeat: "repeat-y",
        }
      }
      className="pt-32 mx-auto"
    >
      <h2 className="text-5xl font-semibold text-center">Customer Feedback</h2>
      {/* <div className="grid gird-cols-1 justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 md:mx-4 rounded-md mt-4">
        {reviews.map((review) => (
          <Customer key={review._id} review={review} />
        ))}
      </div> */}
    </section>
  );
};

export default Review;
