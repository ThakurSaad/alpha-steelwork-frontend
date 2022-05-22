import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginBg from "../../assets/login-bg.jpg";
import google from "../../assets/google.png";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  let errorElement;
  // firebase hooks
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  useEffect(() => {
    if (user || gUser) {
      toast.success("Welcome back");
      navigate("/");
    }
  }, [user, gUser, navigate]);
  if (loading || gLoading) {
    return <Loading></Loading>;
  }
  if (error || gError) {
    errorElement = (
      <p className=" px-1 pb-2">
        <small className="text-red-500">
          {error?.message || gError?.message}
        </small>
      </p>
    );
  }

  const onSubmit = async (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  const handleGoogleSignUp = () => {
    signInWithGoogle();
  };

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
          <h2 className="text-5xl font-bold text-center text-primary">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold pl-3">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold pl-3">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be more than 5 characters",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {errorElement}
            <input
              className="btn btn-primary w-full max-w-xs"
              type="submit"
              value="Sign Up"
            />
          </form>
          <p className="p-1">
            <small>
              New to Alpha Steelwork ?{" "}
              <Link className="text-primary font-semibold" to="/signUp">
                Sign Up
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <div>
            <button
              className="btn text-primary bg-base-200 border-0 w-full max-w-xs"
              onClick={handleGoogleSignUp}
            >
              <img className="mr-2" src={google} alt="google" /> sing up with
              google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
