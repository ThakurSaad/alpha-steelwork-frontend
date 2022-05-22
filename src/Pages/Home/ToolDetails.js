import React from "react";
import { useParams } from "react-router-dom";

const ToolDetails = () => {
  const { purchaseId } = useParams();

  return (
    <section className="min-h-screen">
      <h2 className="text-5xl font-semibold text-center">
        Tool details of : {purchaseId}{" "}
      </h2>
    </section>
  );
};

export default ToolDetails;
