import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("User Log Out"))
      .catch((error) => console.log(error));
  };

  // Toggle dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = (
    <>
      <li className="font-bold mr-3">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-bold mr-3">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="font-bold mr-3">
        <NavLink to="/contactus">Contact Us</NavLink>
      </li>
     
      <li ref={dropdownRef} className="relative">
        <button
          className="font-bold uppercase cursor-pointer"
          onClick={toggleDropdown}
        >
          Items <IoMdArrowDropdown />
        </button>
        {isDropdownOpen && (
          <ul className="absolute bg-[#e7ecdd] rounded-none lg:mt-14 mt-0 w-52  text-[#674636] shadow-lg z-50 p-2">
            <li className="font-bold mr-3">
              <NavLink to="/allitems">All Items</NavLink>
            </li>
            <li className="font-bold mr-3">
              <NavLink to="/additems">Add Items</NavLink>
            </li>
            <li className="font-bold mr-3">
              <NavLink to="/myitems">My Items</NavLink>
            </li>
          </ul>
        )}
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-[#aab396] p-2 shadow-lg z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-[#fff8e8] rounded-box z-50 mt-5 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <div>
            <h1 className="font-bold lg:hidden text-gray-200">
              Starlight Artistry
            </h1>
            <img
              className="w-7/12 ml-3 h-10/12 mt-1 hidden lg:block"
              src="https://i.ibb.co.com/cFqgfGr/logo2.png"
              alt="Logo"
            />
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-gray-100 uppercase px-1">
            {navLinks}
          </ul>
        </div>

        {/* Avatar and Login/Logout Button */}
        <div className="navbar-end flex">
          {user ? (
            <button
              onClick={handleLogOut}
              className="lg:text-sm text-xs font-semibold bg-[#795757]  duration-400 hover:bg-[#ad7e7e] text-white px-2 py-1 lg:py-2 rounded-md lg:px-10  hover:text-gray-200 hover:border hover:border-white duration-200 mr-4"
            >
              Sign Out
            </button>
          ) : (
            <Link to="/login">
              <button className="text-xs  lg:text-sm font-semibold  text-white px-2 py-1 lg:py-2 rounded-md lg:px-10 bg-[#795757]  duration-400 hover:bg-[#ad7e7e] mr-4">
                Login
              </button>
            </Link>
          )}

          <div className="avatar">
            <div className="w-10 rounded-full">
              {user && user.photoURL ? (
                <img src={user.photoURL} alt="User Avatar" />
              ) : (
                <img
                  src="https://i.ibb.co/KyWtrr4/avatar.jpg"
                  alt="Default Avatar"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
