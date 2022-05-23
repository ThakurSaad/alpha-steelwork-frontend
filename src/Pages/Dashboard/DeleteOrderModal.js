import React from "react";

const DeleteOrderModal = ({ deleteOrder, setDeleteOrder }) => {
  const { customerName, productName, quantity } = deleteOrder || "";
  console.log(deleteOrder);

  return (
    <div>
      <input
        type="checkbox"
        id="delete-my-order-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-success text-lg">
            Hello! {customerName}
          </h3>
          <p className="font-semibold text-red-500 py-4">
            Product : {productName}
            <br />
            Quantity : {quantity}
          </p>
          <p className="py-4">
            Are You sure you want to delete? Once deleted, the information will
            be erased from our database
          </p>
          <div className="modal-action">
            <label
              htmlFor="delete-my-order-modal"
              className="btn hover:bg-red-600 border-0"
            >
              Confirm
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrderModal;
