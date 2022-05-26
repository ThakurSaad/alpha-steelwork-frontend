import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Tool from "./Tool";
import allToolBg from "../../assets/all-tool-bg.jpg";

const AllTool = () => {
  const { data: tools, isLoading } = useQuery("tools", () =>
    fetch("https://infinite-basin-98544.herokuapp.com/tools").then((res) =>
      res.json()
    )
  );
  console.log(tools);
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section
      className="min-h-screen py-16"
      style={{
        background: `url(${allToolBg})`,
        backgroundSize: "contain",
      }}
    >
      <h2 className="text-5xl font-semibold text-center pb-8">All Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </section>
  );
};

export default AllTool;
