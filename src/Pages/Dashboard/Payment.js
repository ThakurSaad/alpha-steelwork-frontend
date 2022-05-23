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
      fetch(`https://infinite-basin-98544.herokuapp.com/order/${payForId}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section>
      <h2 className="text-5xl text-center font-bold text-primary lg:text-left md:ml-24 xl:ml-36">
        Complete Payment
      </h2>
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
