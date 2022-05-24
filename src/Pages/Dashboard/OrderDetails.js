import React from "react";

const OrderDetails = ({ payForTool }) => {
  const { address, contact, customer, customerName, productName, quantity, price } =
    payForTool;
    console.log(payForTool);
  return (
    <section className="my-8">
      <div className="card max-w-xs md:max-w-lg bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl">Order Details</h2>
          <hr className="border-2 my-2 border-accent" />
          <h5 className="font-semibold">Customer Details</h5>
          <hr className="border  w-1/2 my-2 border-primary" />
          <p className="card-title">Name : {customerName}</p>
          <p className="card-title">Email : {customer}</p>
          <p className="card-title">
            Contact No : {contact ? contact : "Not Provided"}
          </p>
          <p className="card-title">Delivery Address : {address}</p>
          <h5 className="font-semibold mt-2">Product Details</h5>
          <hr className="border  w-1/2 my-2 border-primary" />
          <p className="card-title"> Name : {productName}</p>
          <p className="card-title"> Quantity : {quantity}</p>
          <p className="card-title"> Quantity : {price}</p>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
