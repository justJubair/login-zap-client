import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const Board = () => {
  const { user, logOut } = useAuth();
  const [employees, setEmployees] = useState([])

  useEffect(()=>{
    fetch("http://localhost:5000/employees")
    .then(res=> res.json())
    .then(data=> setEmployees(data))
  },[])

  console.log(employees)

  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="max-w-screen-lg mx-auto">
      {/* user info */}
      <div className="flex items-center justify-between mt-4 shadow-lg px-4 py-2 mb-4">
        <h3 className="font-bold text-lg">Administration</h3>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://i.pinimg.com/originals/32/cb/60/32cb600629bfdad9cbe5f138a67dc7d3.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>{user?.displayName}</a>
            </li>
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>

            <li onClick={handleLogout}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>

      {/* add user button */}
      <Link to="/dashboard/addUser" className="flex justify-end py-4">
        <button className="btn bg-indigo-500 text-white border-none hover:bg-indigo-600">
          Add User
        </button>
      </Link>

      {/* employees */}
      <div className="grid grid-cols-2 gap-6 mt-6">

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Board;
