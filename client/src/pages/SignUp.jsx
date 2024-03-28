import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>

        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="User Name"
            className="border p-3 rounded-lg"
            id="username"
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg"
            id="email"
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded-lg"
            id="password"
          />

          <button className="bg-slate-600 text-white p-3 rounded-xl uppercase hover:opacity-95 disabled:opacity-80">
            Sign Up
          </button>
        </form>

        <div className="flex gap-3 mt-6">
          <p>Have an account?</p>
          <Link to={"/sign-in"}>
            <span className="text-blue-800">Sign In</span>
          </Link>
        </div>
      </div>
    </>
  );
}
