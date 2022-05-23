import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import DeleteOrderModal from "./DeleteOrderModal";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [deleteOrder, setDeleteOrder] = useState(null);

  const { data: orders, isLoading, refetch } = useQuery(["order", user?.email], () =>
    fetch(`http://localhost:5000/order?customer=${user?.email}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="min-h-screen">
      <h2 className="text-2xl font-semibold my-4">My Orders</h2>
      <div className="my-orders-table">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Serial</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Cancellation</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{o.productName}</td>
                  <td>{o.quantity}</td>
                  <td>
                    <div className="tooltip" data-tip="Complete Payment">
                      <button className="btn btn-primary btn-sm text-white">
                        pay
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="tooltip" data-tip="Cancel This Order">
                      <label
                        htmlFor="delete-my-order-modal"
                        className="btn modal-button btn-primary btn-sm text-white "
                        onClick={() => setDeleteOrder(o)}
                      >
                        Delete
                      </label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {deleteOrder && (
        <DeleteOrderModal
          deleteOrder={deleteOrder}
          setDeleteOrder={setDeleteOrder}
          refetch={refetch}
        ></DeleteOrderModal>
      )}
    </section>
  );
};

export default MyOrders;
