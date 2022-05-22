import React from "react";
import { useQuery } from "react-query";
import toolBg from "../../assets/parts-bg.jpg";
import Loading from "../Shared/Loading";
import Tool from "./Tool";

const Tools = () => {
  const { data: tools, isLoading } = useQuery("tools", () =>
    fetch("http://localhost:5000/tools").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section
      style={{
        background: `url(${toolBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat-y",
      }}
      className="py-32"
    >
      <h2 className="text-5xl font-semibold text-center mb-8">
        Tools We Manufacture
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </section>
  );
};

export default Tools;
