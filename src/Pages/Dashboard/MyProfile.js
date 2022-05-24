import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { email, displayName } = user;

  const {
    data: currentUser,
    isLoading,
    refetch,
  } = useQuery(["user", email], () =>
    fetch(`http://localhost:5000/users/${email}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  
  const { education, address, contact, hobby, faceBook, linkedIn } =
    currentUser || "";

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
        refetch();
      });
  };

  return (
    <section>
      <h2 className="text-3xl font-semibold text-primary my-4">My Profile</h2>
      <div className="profile m-4">
        <div className="current-profile mt-6 mb-20">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <FontAwesomeIcon
                    className="pt-2 pl-4"
                    icon={faUser}
                    size="4x"
                  ></FontAwesomeIcon>
                </div>
              </div>
            </figure>
            <div className="p-8">
              <h2 className="card-title text-2xl uppercase">{displayName}</h2>
              <hr className="border-2 my-6 border-accent" />
              <p className="my-3">
                <span className="font-semibold">Email :</span> {email}
              </p>
              <p className="my-3">
                <span className="font-semibold">Education :</span>{" "}
                {education ? education : "Not Provided"}
              </p>
              <p className="my-3">
                <span className="font-semibold">Address :</span>{" "}
                {address ? address : "Not Provided"}
              </p>
              <p className="my-3">
                <span className="font-semibold">Contact :</span>{" "}
                {contact ? contact : "Not Provided"}
              </p>
              <p className="my-3">
                <span className="font-semibold">Hobby :</span>{" "}
                {hobby ? hobby : "Not Provided"}
              </p>
              <p className="my-3">
                <span className="font-semibold">FaceBook :</span>{" "}
                {faceBook ? faceBook : "Not Provided"}
              </p>
              <p className="my-3">
                <span className="font-semibold">LinkedIn :</span>{" "}
                {linkedIn ? linkedIn : "Not Provided"}
              </p>
            </div>
          </div>
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
              defaultValue={education}
            />
            <label className="label">
              <span className="label-text font-semibold pl-3">Address</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
              defaultValue={address}
            />
            <label className="label">
              <span className="label-text font-semibold pl-3">Contact No</span>
            </label>
            <input
              type="number"
              name="contact"
              placeholder="Your Contact No"
              className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
              defaultValue={contact}
            />
            <label className="label">
              <span className="label-text font-semibold pl-3">LinkedIn</span>
            </label>
            <input
              type="text"
              name="linkedIn"
              placeholder="LinkedIn Profile Link"
              className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
              defaultValue={linkedIn}
            />
            <label className="label">
              <span className="label-text font-semibold pl-3">FaceBook</span>
            </label>
            <input
              type="text"
              name="faceBook"
              placeholder="FaceBook Profile Link"
              className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
              defaultValue={faceBook}
            />
            <label className="label">
              <span className="label-text font-semibold pl-3">Hobby</span>
            </label>
            <input
              type="text"
              name="hobby"
              placeholder="Your hobbies"
              className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
              defaultValue={hobby}
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
