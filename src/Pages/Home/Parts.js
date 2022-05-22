import React from "react";
import { useQuery } from "react-query";
import partBg from "../../assets/parts-bg.jpg";
import Loading from "../Shared/Loading";

const Parts = () => {
  const { data: parts, isLoading } = useQuery("parts", () =>
    fetch("http://localhost:5000/parts").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(parts);

  return (
    <section
      style={{
        background: `url(${partBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat-y",
      }}
      className="py-32"
    >
      <h2 className="text-5xl font-semibold text-center">
        Parts We Manufacture
      </h2>
    </section>
  );
};

export default Parts;
