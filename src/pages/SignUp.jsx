import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import LogoImg from "../assets/logoo.png";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import toast from "react-hot-toast";
import { app } from "../firebase";
import { AppContext } from "../context/AppContextProvider";

const SignUp = () => {
  const { setUser } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth(app);

  auth.languageCode = "it";

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account ",
  });
  const createAccount = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      return toast.error("All fields are compulsory");
    }

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(response);
      localStorage.setItem("Auth_Token", response._tokenResponse.refreshToken);
      setUser(response.user);
      toast.success("User created successfully");
      navigate("/app");
      console.log(response);
    } catch (error) {
      switch (error.code) {
        case "auth/weak-password":
          toast.error("Password is too weak, please use a stronger password.");
          break;
        case "auth/email-already-in-use":
          toast.error("Email is already in use");
          break;
        case "auth/invalid-email":
          toast.error("Invalid email format");
          break;
        case "auth/user-disabled":
          toast.error(
            "This account has been disabled. Please contact support."
          );
          break;
        case "auth/user-not-found":
          toast.error("User not found. Please check your email and try again.");
          break;
        case "auth/wrong-password":
          toast.error(
            "Incorrect password. Please check your password and try again."
          );
          break;
        default:
          toast.error("An unexpected error occurred. Please try again later.");
          console.error(error);
      }
    }
  };
  const logGoogleUser = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      localStorage.setItem("Auth_Token", response._tokenResponse.refreshToken);
      setUser(response.user);
      toast.success("User created successfully");
      navigate("/app");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
            <img src={LogoImg} alt="" className="" />
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Sign Up
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 ">
            Already have an account?
            <Link
              to="/"
              className="font-semibold text-black transition-all duration-200 hover:underline"
            >
              Sign In
            </Link>
          </p>
          <form onSubmit={createAccount} className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Password{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                <button className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80">
                  Create Account <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
          <div className="mt-3 space-y-3">
            <button
              onClick={logGoogleUser}
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-rose-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </span>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
