import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!agreeTerms) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    // Send data to Laravel API
    console.log({ name, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6]">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#07355b]">
          Create a Boi Poka Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Re-enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Agree to Terms */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
              className="h-4 w-4 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
              required
            />
            <label className="text-gray-700 text-sm">
              I agree to the{" "}
              <Link to="/terms" className="text-blue-500 hover:underline">
                Terms & Conditions
              </Link>
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-[#07355b] text-white py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition"
          >
            <a href="./">Sign Up</a>
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center gap-2 mt-2 text-gray-400">
            <span className="border-b w-1/5"></span>
            <span>OR</span>
            <span className="border-b w-1/5"></span>
          </div>

          {/* Sign Up with Google */}
          <button
            type="button"
            className="w-full border cursor-pointer border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition"
          >
            <img
              src="https://img.icons8.com/color/16/google-logo.png"
              alt="google icon"
            />
            Sign Up with Google
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
