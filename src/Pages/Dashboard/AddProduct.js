import React from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      image: event.target.image.value,
      name: event.target.name.value,
      description: event.target.description.value,
      minOrderQuantity: event.target.minOrderQuantity.value,
      availQuantity: event.target.availQuantity.value,
      price: event.target.price.value,
    };

    fetch("http://localhost:5000/tools", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product added successfully");
        } else {
          toast.error("Some error occurred.Please try again");
        }
        console.log(data);
      });
  };

  return (
    <section>
      <h2 className="text-3xl font-semibold text-primary my-4">Add Product</h2>
      <div className="add-product form">
        <form onSubmit={handleSubmit}>
          <label className="label">
            <span className="label-text font-semibold pl-3">Image</span>
          </label>
          <input
            type="text"
            name="image"
            placeholder="Photo Link Of Product"
            className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
            required
          />
          <label className="label">
            <span className="label-text font-semibold pl-3">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
            required
          />
          <label className="label">
            <span className="label-text font-semibold pl-3">Description</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="Short Description"
            className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
            required
          />
          <label className="label">
            <span className="label-text font-semibold pl-3">
              Minimum Order Quantity
            </span>
          </label>
          <input
            type="number"
            name="minOrderQuantity"
            placeholder="Minimum Order Quantity"
            className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
            required
          />
          <label className="label">
            <span className="label-text font-semibold pl-3">
              Available Quantity
            </span>
          </label>
          <input
            type="number"
            name="availQuantity"
            placeholder="Available Quantity"
            className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
            required
          />
          <label className="label">
            <span className="label-text font-semibold pl-3">Price</span>
          </label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
            required
          />

          <input
            className="btn btn-primary w-full max-w-xs block my-4"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
