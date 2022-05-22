import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import google from "../../assets/google.png";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const SocialLogin = ({ children }) => {
  const navigate = useNavigate();
  let errorElement;
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  useEffect(() => {
    if (gUser) {
      toast.success("Welcome back");
      navigate("/");
    }
  }, [gUser, navigate]);
  if (gLoading) {
    return <Loading></Loading>;
  }
  if (gError) {
    errorElement = (
      <p className=" px-1 pb-2">
        <small className="text-red-500">{gError?.message}</small>
      </p>
    );
  }

  const handleGoogleSignUp = () => {
    signInWithGoogle();
  };

  return (
    <section>
      {errorElement}
      <button
        className="btn text-primary bg-base-200 border-0 w-full max-w-xs"
        onClick={handleGoogleSignUp}
      >
        <img className="mr-2" src={google} alt="google" /> {children}
      </button>
    </section>
  );
};

export default SocialLogin;
