import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const ToolDetails = () => {
  const [quantity, setQuantity] = useState(0);
  const { purchaseId } = useParams();
  const [user] = useAuthState(auth);
  let errorElement;

  const { data: tool } = useQuery(["tool", purchaseId], () =>
    fetch(
      `http://localhost:5000/tool/purchase/${purchaseId}`
    ).then((res) => res.json())
  );

  const { displayName, email } = user || "";
  const {
    _id,
    image,
    name,
    description,
    minOrderQuantity,
    availQuantity,
    price,
  } = tool || "";

  if (quantity > parseInt(availQuantity)) {
    errorElement = (
      <p className="text-red-500">
        Sorry! We can't process order more than available quantity. If you need
        so, do no hesitate to contact us
      </p>
    );
  } else if (quantity <= parseInt(minOrderQuantity) && quantity !== 0) {
    errorElement = (
      <p className="text-red-500">
        Sorry! You can not order less than minimum order quantity. If you need
        so, do no hesitate to contact our local distributor in you region.
      </p>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      product: _id,
      productName: name,
      customer: email,
      customerName: displayName,
      address: event.target.address.value,
      contact: event.target.contact.value,
      quantity: quantity,
      price: price,
    };
    console.log(order);
    if (
      quantity > parseInt(minOrderQuantity) &&
      quantity < parseInt(availQuantity)
    ) {
      fetch(`http://localhost:5000/order`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success(
              `You have ordered ${quantity} pieces. Please go to My orders to complete the payment`
            );
            event.target.reset();
          }
        });
    } else if (quantity > parseInt(availQuantity)) {
      toast.error("Quantity can not be more than available quantity");
    } else if (quantity <= parseInt(minOrderQuantity)) {
      toast.error("Quantity can not be less than minimum order quantity");
    }
  };

  return (
    <section className="min-h-screen">
      <div className="tool-details">
        <div className="card w-72 md:w-5/6 bg-base-100 mx-auto">
          <figure>
            <img src={image} alt="tool" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-5xl">{name}</h2>
            <p className="text-2xl">{description}</p>
            <p className="font-semibold">
              Minimum Order Quantity : {minOrderQuantity}
            </p>
            <p className="font-semibold">
              Available Quantity : {availQuantity}
            </p>
            <p className="font-semibold">
              Price :{" "}
              <span className="text-4xl text-secondary font-light">
                {price}
              </span>
              $/per piece
            </p>
            <h2 className="text-3xl font-semibold text-primary mt-8">
              Please Fill Up The Form To Complete The Purchase
            </h2>
            <form onSubmit={handleSubmit}>
              <label className="label">
                <span className="label-text font-semibold pl-3">Name</span>
              </label>
              <input
                type="text"
                name="name"
                className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
                defaultValue={displayName}
                disabled
              />
              <label className="label">
                <span className="label-text font-semibold pl-3">Email</span>
              </label>
              <input
                type="email"
                name="email"
                className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
                defaultValue={email}
                disabled
              />
              <label className="label">
                <span className="label-text font-semibold pl-3">
                  Product Name
                </span>
              </label>
              <input
                type="text"
                name="productName"
                className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
                defaultValue={name}
                disabled
              />
              <label className="label">
                <span className="label-text font-semibold pl-3">Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
                required
              />
              <label className="label">
                <span className="label-text font-semibold pl-3">
                  Contact No
                </span>
              </label>
              <input
                type="number"
                name="contact"
                placeholder="Your Contact No"
                className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text font-semibold pl-3">Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="Order Quantity"
                className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
                required
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {" "}
                  {errorElement}
                </span>
              </label>
              <button
                className="w-full max-w-xs"
                // disabled={
                //   quantity < parseInt(minOrderQuantity) ||
                //   quantity > parseInt(availQuantity)
                // }
              >
                <input
                  className="btn btn-primary w-full max-w-xs block my-4"
                  type="submit"
                  value="Order Now"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolDetails;
