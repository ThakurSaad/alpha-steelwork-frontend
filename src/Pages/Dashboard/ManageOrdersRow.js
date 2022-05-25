import React from "react";
import { toast } from "react-toastify";

const ManageOrdersRow = ({ order, index, refetch }) => {
  const { _id, customer, customerName, productName, paid, shipment } =
    order || "";

  const handlePending = () => {
    fetch(`https://infinite-basin-98544.herokuapp.com/order/${_id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("Placed for shipment");
        }
        refetch();
      });
  };

  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td className="uppercase font-semibold">{customerName}</td>
      <td>{customer}</td>
      <td>{productName}</td>
      <td>
        {paid ? (
          <>
            <span className="text-success font-semibold">Paid</span>
          </>
        ) : (
          <div
            className="tooltip tooltip-primary"
            data-tip="Payment is not completed yet"
          >
            <span className="text-primary font-semibold">Unpaid</span>
          </div>
        )}
      </td>
      <td>
        {paid ? (
          <>
            {!shipment ? (
              <div
                className="tooltip tooltip-secondary"
                data-tip="ready for shipment"
              >
                <button
                  className="btn btn-sm btn-secondary text-white"
                  onClick={handlePending}
                >
                  Pending
                </button>
              </div>
            ) : (
              <>
                <div
                  className="tooltip tooltip-success"
                  data-tip="Shipment placed"
                >
                  <span className="text-success font-semibold">Shipped</span>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div
              className="tooltip tooltip-warning"
              data-tip="Delete customer's order"
            >
              <button className="btn btn-sm btn-warning">Cancel</button>
            </div>
          </>
        )}
      </td>
    </tr>
  );
};

export default ManageOrdersRow;
