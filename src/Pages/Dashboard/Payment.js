import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import OrderDetails from "./OrderDetails";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0k3pBXb2oMSwoOsHqTSof6vAX4IAro7WMoVRpsdMsqRPZrehiaEZWObsFHZKvEkuvTGaeWLNaEYSpmGbPH1d8P00R4yJVRYn"
);

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
      <h2 className="text-3xl font-semibold text-primary my-4">
        Complete Payment
      </h2>
      <div className="order-details">
        <OrderDetails
          key={payForTool._id}
          payForTool={payForTool}
        ></OrderDetails>
      </div>
      <div className="payment-stripe py-12">
        <div className="card max-w-sm bg-base-100 shadow-xl">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm payForTool={payForTool} />
            </Elements>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
