import React from "react";

const Loading = () => {
  return (
    <section className="h-screen flex items-center justify-center ">
      <div>
        <div className="w-16 h-16 border-t-4 border-b-4 border-accent rounded-full animate-spin"></div>
      </div>
    </section>
  );
};

export default Loading;
