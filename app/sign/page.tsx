"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";

const SignUpForm: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-50 px-4 lg:px-0">
      {/* Left Image Section */}
      <div className="hidden lg:flex lg:w-[50%] justify-center">
        <img
          src="/sign.png" // Replace with your image path
          alt="Phone and cart"
          className="w-[300px] h-auto" // Fixed width
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-[33%] bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Create an account
        </h2>
        <form
          className="space-y-6"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
        >
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none outline-none"
              required
            />
          </div>

          {/* Email or Phone Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email or Phone Number
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email or phone"
              className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none outline-none"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white font-medium py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
          >
            Create Account
          </button>

          {/* Google Signup */}
          <button
            type="button"
            className="w-full flex items-center justify-center border border-gray-300 py-2 px-4 rounded-md text-gray-700 hover:bg-gray-100 transition duration-300"
          >
            {/* <img
              src="<FcGoogle />" // Replace with your Google icon path
              alt="Google"
              className="w-5 h-5 mr-2"
            /> */}
            <FcGoogle width={5} />
            Sign up with Google
          </button>
        </form>

        {/* Already have an account */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
