import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
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

  const handleAdmin = (_id) => {
    fetch(`http://localhost:5000/users/admin/${_id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Successfully made user Admin");
        }
        console.log(data);
      });
  };
  console.log(users);

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
            {users.map((u, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{u.email}</td>
                <td>
                  <button
                    onClick={() => handleAdmin(u._id)}
                    className="btn btn-sm btn-primary text-white"
                  >
                    Make admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MakeAdmin;
