import React from "react";

const Tool = ({ tool }) => {
  const {
    _id,
    image,
    name,
    description,
    minOrderQuantity,
    availQuantity,
    price,
  } = tool;

  const handlePurchase = () => {};

  return (
    <div className="card w-72 bg-base-100 shadow-xl p-2">
      <figure>
        <img src={image} alt="tool" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <p>{description}</p>
        <p>Minimum Order Quantity : {minOrderQuantity}/piece</p>
        <p>Available Quantity : {availQuantity}</p>
        <p>Price : {price}$</p>
        <div className="card-actions">
          <button
            onClick={() => handlePurchase(_id)}
            className="btn btn-primary"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
