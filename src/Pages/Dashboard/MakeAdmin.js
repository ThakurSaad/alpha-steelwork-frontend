import React from "react";
import { useQuery } from "react-query";

import Loading from "../Shared/Loading";
import AdminRow from "./AdminRow";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://infinite-basin-98544.herokuapp.com/users", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="min-h-screen">
      <h2 className="text-3xl font-semibold text-primary my-4">Make Admin</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <AdminRow
                key={index}
                index={index}
                user={user}
                refetch={refetch}
              ></AdminRow>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MakeAdmin;
