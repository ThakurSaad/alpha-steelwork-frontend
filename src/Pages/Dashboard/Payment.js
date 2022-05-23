import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";

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
  console.log("Inside Payment", payForTool);
  return (
    <section>
      <h2 className="text-5xl text-center font-bold text-primary lg:text-left md:ml-24 xl:ml-36">
        Complete Payment
      </h2>
    </section>
  );
};

export default Payment;
