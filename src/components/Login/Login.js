import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "./../../config/firebse";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { HiEyeOff, HiEye } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = ({ isLogin, setIsLogin, forgotPass, setForgotPass }) => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleIsLogin = () => {
    setIsLogin(!isLogin);
    setForgotPass(false);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    console.log("email", formData.email.split("@")[1]);

    if (isLogin) {
      if (formData.email.split("@")[1] === "pesachoice.com") {
        signInWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userInfo) => {
            const user = userInfo.user;

            if (user) {
              toast.success("Logged in Successfully 👍🏾");
              setFormData({
                email: "",
                password: "",
              });
              navigate("/dashboard");
            }
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log("error", errorMessage);
            toast.error(errorMessage.split(":")[1]);
          });
      } else {
        toast.info("Only specific emails can login");
      }
    } else if (forgotPass) {
      sendPasswordResetEmail(auth, formData.email)
        .then(() => {
          toast.success("Please check your email 👍🏾");
          setFormData({
            email: "",
            password: "",
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage.split(":")[1]);
        });
    } else {
      if (formData.email.split("@")[1] === "pesachoice.com") {
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userInfo) => {
            const user = userInfo.user;
            if (user) {
              toast.success("Account Created 👍🏾");
              setFormData({
                email: "",
                password: "",
              });
              navigate("/dashboard");
            }
          })
          .catch((error) => {
            const errorMessage = error.message;

            toast.error(errorMessage.split(":")[1]);
          });
      } else {
        toast.info("Only specific emails can create accounts");
      }
    }
  };

  const handleShowPassword = () => {
    setShowPass(!showPass);
  };

  // const handleForgotPassword = () => {

  //   sendPasswordResetEmail(auth, email)
  //     .then(() => {
  //       // Password reset email sent!
  //       // ..
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });
  // };

  const handleFogotPass = () => {
    setForgotPass(true);
  };

  return (
    <>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          success={true}
        />
      </div>

      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-lg font-semibold text-orange-600 uppercase">
              MIDAS HR SOFTWARE ACCESS.
            </h1>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              {!forgotPass
                ? isLogin
                  ? "Sign in to your account"
                  : "Create an account"
                : "Reset your Pasword"}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <NavLink
                to="/"
                onClick={handleIsLogin}
                className="font-medium text-orange-600 hover:text-orange-500"
              >
                &nbsp;
                {!forgotPass
                  ? isLogin
                    ? "Signup if you are new."
                    : "Login if you have account"
                  : "Login"}
              </NavLink>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>

                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none mb-5 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      email: event.target.value,
                    })
                  }
                />
              </div>
              {!forgotPass && (
                <div className="relative">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type={showPass ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        password: event.target.value,
                      })
                    }
                  />
                  <div
                    className="absolute top-3 right-3 bottom-0 cursor-pointer"
                    onClick={handleShowPassword}
                  >
                    {showPass ? <HiEye /> : <HiEyeOff />}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <NavLink
                  to="/"
                  onClick={handleFogotPass}
                  className="font-medium text-orange-600 hover:text-orange-500"
                >
                  Forgot your password?
                </NavLink>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-orange-500 group-hover:text-orange-400"
                    aria-hidden="true"
                  />
                </span>
                {/* {loading && (
                  <div className="animate-spin h-5 w-5 mr-3 border-white rounded-full text-white border-2 border-solid border-t-transparent"></div>
                )} */}
                {!forgotPass
                  ? isLogin
                    ? "Sign in"
                    : "Signup"
                  : "Forgot Password"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
