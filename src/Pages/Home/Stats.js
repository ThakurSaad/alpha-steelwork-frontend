import React from "react";

const Stats = () => {
  return (
    <div className="text-center py-16">
      <div className="stats stats-vertical lg:stats-horizontal shadow bg-transparent items-end hover:bg-white hover:shadow-2xl duration-300 py-8">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">
            We launched our official instagram this year
          </div>
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-primary md:text-6xl">25.6K</div>
          <div className="stat-desc">7% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Revenue Increased</div>
          <div className="stat-value text-secondary md:text-6xl">2.6M</div>
          <div className="stat-desc">11% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img
                  src="https://api.lorem.space/image/face?w=128&h=128"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="stat-title">Customer comebacks</div>
          <div className="stat-value md:text-6xl">86%</div>
          <div className="stat-desc text-black">
            Mostly comes back with larger orders
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
