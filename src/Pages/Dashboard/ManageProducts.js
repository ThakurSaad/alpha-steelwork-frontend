import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const ManageProducts = () => {
  const { data: tools, isLoading } = useQuery("tools", () =>
    fetch("http://localhost:5000/tools").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(tools);

  return (
    <section>
      <h2 className="text-3xl font-semibold text-primary my-4">
        Manage Products
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageProducts;
