import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-[0.4]">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-emerald-400"> Chat<span className="text-white">App</span></span>
        </h1>

        <form>
          <div className="mt-3">
            <label className="label p-2">
              <span className="text-base label-text text-gray-100 font-semibold font-serif">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div className="mt-3">
            <label className="label">
              <span className="text-base label-text text-gray-100 font-semibold font-serif">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <a
            href="#"
            className="text-sm text-gray-800  hover:underline hover:text-blue-600 mt-4 inline-block"
          >
            {"Don't"} have an account?
          </a>

          <div className="flex justify-center mt-2">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-slate-800 ">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
