import React from "react";

const ManageProductsModal = () => {
  const handleConfirm = () => {};

  return (
    <div className="max-w-sm">
      <input
        type="checkbox"
        id="delete-product-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-w-sm">
          <h3 className="font-bold text-lg">
            Congratulations random Interner user!
          </h3>
          <p className="py-4">alksdf</p>
          <div className="modal-action">
            <label
              htmlFor="delete-product-modal"
              className="btn hover:bg-red-600 border-0"
              onClick={handleConfirm}
            >
              Confirm
            </label>
            <label htmlFor="delete-product-modal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProductsModal;
