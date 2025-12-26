'use client'

import { useState } from "react";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-center text-primary mb-6">
          <span className="text-green-500 font-bold text-2xl">M</span>egethos
        </h1>

        <form className="space-y-4">

          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium mb-1 text-gray-700"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoComplete="given-name"
            />
          </div>

          <div>
            <label
              htmlFor="surname"
              className="block text-sm font-medium mb-1 text-gray-700"
            >
              Surname
            </label>
            <input
              id="surname"
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              autoComplete="family-name"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium mb-1 text-gray-700"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1 text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1 text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition-all"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <button
            onClick={() => (window.location.href = "/LogIn")}
            className="text-primary font-medium hover:underline"
          >
            Log in here
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
