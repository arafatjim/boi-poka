import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const links = (
    <>
      <li className="text-center justify-self-center">
        <NavLink className="hover:bg-green-500" to="/">Home</NavLink>
      </li>
      <li className="text-center justify-self-center">
        <NavLink className="hover:bg-green-500" to="/listedBooks">Listed Book</NavLink>
      </li>
      <li className="text-center justify-self-center">
        <NavLink className="hover:bg-green-500" to="/listedBooks">Book List</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar shadow-sm text-white bg-[#07355b] width-full px-4">
      <div className="navbar-start ">
        <div className="dropdown l">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#4381b3] rounded-box z-1 mt-3 w-40 py-4 shadow hover:bg-green-500 h-auto"
          >
            {links}
            <NavLink to="/signin" className="hover:bg-green-500 rounded-sm py-1 px-2">Sign in</NavLink>
            <NavLink to="/signup" className="hover:bg-green-500 rounded-sm py-1 px-2">Sign up</NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl p-6 text-white font-extrabold shadow-2xl hover:bg-green-500"> Boi-Poka</a>
      </div>

      {/* Show only on lg+
      <div className="navbar-center items-center text-center lg:flex ">
        <ul className="menu menu-horizontal  px-1 border-2 border-white lg:grid grid-cols-3 text-white ">{links}</ul>
      </div> */}
      {/* Show only on lg+ */}
<div className="navbar-center hidden lg:flex items-center text-center">
  <ul className="menu menu-horizontal px-1 border-2 border-white text-white">
    {links}
  </ul>
</div>


      <div className="navbar-end gap-2">
        <NavLink to="/signin" className="btn bg-green-500 p-2.5 text-white active:bg-[#e82323]  md:block ">Sign in</NavLink>
        <NavLink to="/signup" className="btn bg-green-500 p-2.5 text-white active:bg-[#e82323]  md:block">Sign up</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
