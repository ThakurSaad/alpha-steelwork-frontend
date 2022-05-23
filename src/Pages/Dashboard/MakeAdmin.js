import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/users").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(users);

  return (
    <section className="min-h-screen">
      <h2 className="text-3xl font-semibold text-primary my-4">Make Admin</h2>
    </section>
  );
};

export default MakeAdmin;
