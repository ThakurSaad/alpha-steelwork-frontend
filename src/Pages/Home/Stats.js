import React from "react";

const Stats = () => {
  return (
    <div className="text-center py-16">
      <div class="stats stats-vertical lg:stats-horizontal shadow bg-transparent items-end hover:bg-white duration-300 py-8">
        <div class="stat">
          <div class="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div class="stat-title">
            We launched our official instagram this year
          </div>
          <div class="stat-title">Total Likes</div>
          <div class="stat-value text-primary md:text-6xl">25.6K</div>
          <div class="stat-desc">7% more than last month</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div class="stat-title">Revenue Increased</div>
          <div class="stat-value text-secondary md:text-6xl">2.6M</div>
          <div class="stat-desc">11% more than last month</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <div class="avatar online">
              <div class="w-16 rounded-full">
                <img
                  src="https://api.lorem.space/image/face?w=128&h=128"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="stat-title">Customer comebacks</div>
          <div class="stat-value md:text-6xl">86%</div>
          <div class="stat-desc text-black">
            Mostly comes back with larger orders
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
