import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { email, displayName } = user;

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedUser = {
      education: event.target.education.value,
      address: event.target.address.value,
      contact: event.target.contact.value,
      linkedIn: event.target.linkedIn.value,
      faceBook: event.target.faceBook.value,
      hobby: event.target.hobby.value,
    };

    fetch(`http://localhost:5000/users/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Your profile has been updated successfully");
        } else {
          toast.error("We are sorry. Some error occurred. Please try again");
        }
        console.log(data);
      });
  };

  return (
    <section>
      <h2 className="text-3xl font-semibold text-primary my-4">My Profile</h2>
      <div className="profile m-4">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <FontAwesomeIcon
              className="pt-2 pl-4"
              icon={faUser}
              size="4x"
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className="current-profile my-6">
          <p>{displayName}</p>
          <p>{email}</p>
        </div>
        <div className="update-profile">
          <form onSubmit={handleSubmit}>
            <label className="label">
              <span className="label-text font-semibold pl-3">Education</span>
            </label>
            <input
              type="text"
              name="education"
              placeholder="Your Education"
              className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text font-semibold pl-3">Address</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text font-semibold pl-3">Contact No</span>
            </label>
            <input
              type="number"
              name="contact"
              placeholder="Your Contact No"
              className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text font-semibold pl-3">LinkedIn</span>
            </label>
            <input
              type="text"
              name="linkedIn"
              placeholder="LinkedIn Profile Link"
              className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text font-semibold pl-3">FaceBook</span>
            </label>
            <input
              type="text"
              name="faceBook"
              placeholder="FaceBook Profile Link"
              className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text font-semibold pl-3">Hobby</span>
            </label>
            <input
              type="text"
              name="hobby"
              placeholder="Your hobbies"
              className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
            />

            <input
              className="btn btn-primary w-full max-w-xs block my-4"
              type="submit"
              value="Update profile"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
