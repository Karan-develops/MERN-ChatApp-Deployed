import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-[0.4]">
        <h1 className="text-3xl font-semibold text-center text-white">
          Login
          <span className="text-emerald-400">
            {" "}
            Chat<span className="text-white">-Verse😎</span>
          </span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mt-3">
            <label className="label p-2">
              <span className="text-base label-text text-gray-100 font-semibold font-serif">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mt-3">
            <label className="label">
              <span className="text-base label-text text-gray-100 font-semibold font-serif">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm text-white  hover:underline hover:text-blue-300 mt-4 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div className="flex justify-center mt-2">
            <button
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-slate-800 "
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
