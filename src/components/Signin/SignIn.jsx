// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can integrate your Laravel API login
//     console.log("Email:", email, "Password:", password);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6]">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center text-[#07355b]">
//           Sign In to Boi Poka
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-gray-700 mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#07355b] text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Sign In
//           </button>
//         </form>

//         <p className="text-center mt-4 text-gray-600">
//           Don’t have an account?{" "}
//           <Link to="/signup" className="text-blue-500 hover:underline">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send login data to Laravel API
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6]">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#07355b]">
          Sign In to Boi Poka
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
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

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-4 w-4 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              Remember Me
            </label>
            <Link
              to="/forgot-password"
              className="text-blue-500 hover:underline text-sm"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-[#07355b] text-white py-2 rounded-lg cursor-pointer hover:bg-green-600 transition"
          >
            <a href="./">Sign In</a>
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center gap-2 mt-2 text-gray-400">
            <span className="border-b w-1/5"></span>
            <span>OR</span>
            <span className="border-b w-1/5"></span>
          </div>

          {/* Sign in with Google */}
          <button
            type="button"
            className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-100 transition"
          >
            <img
              src="https://img.icons8.com/color/16/google-logo.png"
              alt="google icon"
            />
            Sign in with Google
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 cursor-pointer hover:underline ">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
