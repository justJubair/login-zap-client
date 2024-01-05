import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

// icons
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { axiosInstance} from "../../api";

const Board = () => {
  const { user, logOut } = useAuth();
  const [searchInput, setSearchInput] = useState("")
  const [employees, setEmployees] = useState([])

  const handleSearch = (e)=>{
    e.preventDefault()
    const searchText = e.target.searchText.value;
    setSearchInput(searchText)
    
  }

  useEffect(()=>{
    fetch(`http://localhost:5000/employees?searchText=${searchInput}`)
    .then(res=> res.json())
    .then(data=> setEmployees(data))
  },[searchInput])

  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  // Handler function for delete employee
  const handleDelete = (_id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosInstance.delete(`/employee/${_id}`)
        .then(res=>{
          if(res?.data?.deletedCount > 0){
            const remainingEmployee = employees.filter(employee => employee._id !== _id)
            setEmployees(remainingEmployee)
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        })
      
        
      }
    });
  }
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
                src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
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
      <div className="flex items-center justify-between py-8">
    {/* Search box */}
        <form onSubmit={handleSearch} className="flex items-center gap-4">
        <input name="searchText" type="text" placeholder="Search user by name" className="input input-bordered w-full" />
        <button className="btn bg-indigo-500 text-white hover:bg-indigo-600" type="submit">Search</button>
        </form>

      {/* Add user button */}
      <Link to="/dashboard/addEmployee">
        <button className="btn bg-indigo-500 text-white border-none hover:bg-indigo-600">
          Add User
        </button>
      </Link>
      </div>

      {/* employees */}
      <div className="grid grid-cols-2 gap-6 mt-6">

        {
          employees?.map(employee=>
          <div key={employee._id}  className="card bg-base-100 shadow-xl cursor-pointer">
            
          <div className="card-body">
            <h2 className="card-title">Name: {employee?.name}</h2>
            <p>Email: {employee?.email}</p>
            <div className="card-actions justify-end">
              <Link to={`/dashboard/employeeDetails/${employee?._id}`} className="btn btn-sm btn-primary">Details</Link>
              <Link to={`/dashboard/updateEmployee/${employee?._id}`} className="btn btn-sm btn-primary"><FaEdit size={15}/></Link>
              <button onClick={()=>handleDelete(employee._id)} className="btn btn-sm btn-primary"><AiFillDelete size={15}/></button>
            </div>
          </div>
        </div>)
        }
       
        
      </div>
    </div>
  );
};
export default Board;
