import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import OrderDetails from "./OrderDetails";

const Payment = () => {
  const { payForId } = useParams();

  const { data: payForTool, isLoading } = useQuery(
    ["payForTool", payForId],
    () =>
      fetch(`http://localhost:5000/order/${payForId}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section>
      <h2 className="text-3xl font-semibold text-primary my-4">Complete Payment</h2>
      <div className="order-details">
        <OrderDetails
          key={payForTool._id}
          payForTool={payForTool}
        ></OrderDetails>
      </div>
      
    </section>
  );
};

export default Payment;
