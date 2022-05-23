import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="min-h-screen">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <h2 className="text-5xl font-bold">Dashboard</h2>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/addAReview">Add A Review</Link>
            </li>
            <li>
              <Link to="/dashboard/makeAdmin">Make Admin</Link>
            </li>

            <li>
              <Link to="/dashboard/myOrders">My Orders</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
