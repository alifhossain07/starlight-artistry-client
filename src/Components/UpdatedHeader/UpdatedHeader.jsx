import { NavLink } from "react-router-dom";

const UpdatedHeader = () => {
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
      <li>
        <details>
          <summary className="font-bold">Parent</summary>
          <ul className="p-2">
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
        </details>
      </li>
      
    </>
    );
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        
        {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu uppercase menu-horizontal px-1">
     {navLinks}
      
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default UpdatedHeader; 