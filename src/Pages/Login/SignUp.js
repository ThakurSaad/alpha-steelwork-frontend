import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import loginBg from "../../assets/login-bg.jpg";
import google from "../../assets/google.png";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  let errorElement;
  // firebase hooks
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, uError] = useUpdateProfile(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  useEffect(() => {
    if (user || gUser) {
      console.log(user || gUser);
      // navigate("/");
    }
  }, [user, gUser, navigate]);
  if (loading || updating || gLoading) {
    return <Loading></Loading>;
  }
  if (error || uError || gError) {
    errorElement = (
      <p className=" px-1 pb-2">
        <small className="text-red-500">
          {error?.message || uError?.message || gError.message}
        </small>
      </p>
    );
  }

  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    toast.success("Sign Up complete");
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
                <span className="label-text font-semibold pl-3">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input border-r-0 border-l-0 border-t-0 border-b-2 border-primary rounded-none w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

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

export default SignUp;
