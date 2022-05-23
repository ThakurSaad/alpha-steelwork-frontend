import React from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const ToolDetails = () => {
  const { purchaseId } = useParams();
  const [user] = useAuthState(auth);

  return (
    <section className="min-h-screen">
      <div className="user-info mx-4">
        <h2 class="card-title">User Name : {user?.displayName}</h2>
        <p className="font-semibold">Email : {user?.email}</p>
      </div>
    </section>
  );
};

export default ToolDetails;
