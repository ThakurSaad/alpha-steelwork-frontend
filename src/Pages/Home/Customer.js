import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Customer = ({ review }) => {
  const { name, rating, description } = review || "";

  return (
    <div className="card max-w-[320px] h-[320px] md:w-[400px] md:h-[400px] bg-base-100 hover:bg-transparent duration-300 hover:shadow-2xl shadow-xl rounded-sm">
      <div className="card-body rounded-md p-8">
        <h2 className="card-title text-2xl">{name}</h2>
        <hr className="border-separate my-2 border-primary" />
        <p className="text-xl">{description}</p>
        <hr className="border-separate my-2 border-primary" />
        <p className="text-xl">
          Ratings &nbsp; {rating}{" "}
          <FontAwesomeIcon icon={faStar} size="sm"></FontAwesomeIcon>
        </p>
      </div>
    </div>
  );
};

export default Customer;
