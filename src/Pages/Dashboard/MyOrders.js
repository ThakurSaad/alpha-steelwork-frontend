import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyOrders = () => {
  const [user] = useAuthState(auth);

  const { data: orders, isLoading } = useQuery(["order", user?.email], () =>
    fetch(`http://localhost:5000/order?customer=${user?.email}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold my-4">My Orders</h2>
      <div className="my-orders-table">
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
      </div>
    </section>
  );
};

export default MyOrders;
