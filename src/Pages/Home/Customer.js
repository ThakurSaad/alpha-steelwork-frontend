import React from "react";

const Customer = () => {
  return (
    <div className="card max-w-sm bg-base-100 shadow-xl rounded-sm">
      <div className="avatar">
        <div className="w-20 rounded">
          <img
            src="https://api.lorem.space/image/face?hash=80245"
            alt="Tailwind-CSS-Avatar-component"
          />
        </div>
      </div>
      <div className="card-body p-2">
        <h2 className="card-title">Jonathan</h2>
        <p>
          They have very skilled blacksmiths. Extremely glad with the product
        </p>
      </div>
    </div>
  );
};

export default Customer;
