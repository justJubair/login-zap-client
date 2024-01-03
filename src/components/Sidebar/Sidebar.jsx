import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-transparent.svg";

// icons
import { FaUsersGear } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* sidebar navlinks */}
      <div>
        <img
          className="w-36 mx-auto rounded-lg px-2 my-10 bg-[#3131bc]"
          src={logo}
          alt="logo"
        />

        {/* manage users */}
        <NavLink
          to="/manageUsers"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "text-white font-semibold flex items-center gap-2 ml-8"
              : "text-gray-400 font-semibold flex items-center gap-2 ml-8 hover:text-white"
          }
        >
          <FaUsersGear size={25} />
          Manage Users
        </NavLink>

        {/* setting */}
        <NavLink
          to="/setting"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "text-white font-semibold flex items-center gap-2 ml-8"
              : "text-gray-400 font-semibold flex items-center gap-2 ml-8 mt-6 hover:text-white"
          }
        >
          <IoMdSettings size={25} />
          Setting
        </NavLink>
      </div>
      {/* logout */}
      <NavLink
        to="/logout"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "text-white font-semibold flex items-center gap-2 ml-8"
            : "text-gray-400 font-semibold flex items-center gap-2 ml-8 mb-7 hover:text-white"
        }
      >
        <IoIosLogOut size={25} />
        Logout
      </NavLink>
    </div>
  );
};
export default Sidebar;