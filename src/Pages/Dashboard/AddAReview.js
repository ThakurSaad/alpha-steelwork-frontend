import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddAReview = () => {
  const [user] = useAuthState(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      name: user?.displayName,
      rating: event.target.rating.value,
      description: event.target.description.value,
    };

    fetch("https://infinite-basin-98544.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review added successfully");
        } else {
          toast.error("Some error occurred.Please try again");
        }
        event.target.reset();
      });
    console.log(newReview);
  };

  return (
    <section>
      <h2 className="text-3xl font-semibold text-primary my-4">Add A Review</h2>
      <div className="add-review-form">
        <form className="mx-1" onSubmit={handleSubmit}>
          <label className="label">
            <span className="label-text font-semibold pl-3">Name</span>
          </label>
          <input
            type="text"
            name="name"
            className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
            defaultValue={user?.displayName}
            disabled
          />
          <label className="label">
            <span className="label-text font-semibold pl-3">Rating</span>
          </label>
          <input
            type="number"
            name="rating"
            className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
            placeholder="Between 1 to 5"
            min="1"
            max="5"
            required
          />
          <label className="label">
            <span className="label-text font-semibold pl-3">Description</span>
          </label>
          <textarea
            type="text"
            name="description"
            className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
            placeholder="Short Description"
            required
          />
          <input
            className="btn btn-primary w-full max-w-xs block my-4 text-white"
            type="submit"
            value="post review"
          />
        </form>
      </div>
    </section>
  );
};

export default AddAReview;
