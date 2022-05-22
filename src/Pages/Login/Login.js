import React from "react";
import loginBg from "../../assets/login-bg.jpg";

const Login = () => {


  return (
    <section
      style={{
        background: `url(${loginBg})`,
        backgroundSize: "cover",
      }}
      className="min-h-screen flex justify-center items-center"
    >
      <div className="card lg:w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-5xl font-bold text-center text-primary">Login</h2>

          <form>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">What is your name?</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text-alt">Alt label</span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
