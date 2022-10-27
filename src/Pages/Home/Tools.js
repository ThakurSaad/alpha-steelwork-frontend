import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
// import toolBg from "../../assets/parts-bg.jpg";
import Loading from "../Shared/Loading";
import Tool from "./Tool";

const Tools = () => {
  const navigate = useNavigate();

  const { data: tools, isLoading } = useQuery("tools", () =>
    fetch("https://infinite-basin-98544.herokuapp.com/tools").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section
      style={
        {
          // background: `url(${toolBg})`,
          // backgroundSize: "cover",
          // backgroundRepeat: "repeat-y",
        }
      }
      className="py-32"
    >
      <h2 className="text-5xl font-semibold text-center mb-8">
        Tools We Manufacture
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-y-2">
        {tools.slice(0, 6).map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
      <div className="text-center my-4">
        <button
          className="btn btn-primary text-white"
          onClick={() => navigate("allTool")}
        >
          view all tool
        </button>
      </div>
    </section>
  );
};

export default Tools;
