import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-transparent.svg"
const Navbar = () => {
    const navLinks = <>
    <li>
    <NavLink
          to="/"
          className={({ isActive }) =>
   
           
              isActive
              ? "text-white text-base font-semibold bg-[#3b3ba2]"
              : "lg:text-white text-base font-semibold"
          }
        >
            
          Home
        </NavLink>
    </li>
    <li>
    <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "text-white text-base font-semibold bg-[#3b3ba2]"
              : "lg:text-white text-base font-semibold"
          }
        >
            
         Dashboard
        </NavLink>
    </li>
    <li>
    <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "text-white text-base font-semibold bg-[#3b3ba2]"
              : "lg:text-white text-base font-semibold"
          }
        >
            
          About
        </NavLink>
    </li>
    </>

  return (
    
    <div className="navbar absolute z-30 px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
           
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-lg bg-[#3131bc] text-white">Login Zap</a> */}
        <img className="hidden w-32 rounded-lg px-2 bg-[#3b3ba2] lg:block" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {navLinks}
          
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#3b3ba2] border-none text-white">Login</a>
      </div>
    </div>
  );
};
export default Navbar;
