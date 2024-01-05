import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const UpdateEmployee = () => {
    const [employee, setEmployee] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        fetch(`http://localhost:5000/employee/${id}`)
        .then(res=> res.json())
        .then(data=> setEmployee(data))
    },[id])
    
   
    if(!employee.role){
        return <Loader/>
    }
    return(
        <div className="max-w-screen-lg mx-auto">
        {/* Heading */}
        <h2 className="text-center font-bold text-2xl my-6">Add New User</h2>
  
        {/* form */}
        <div>
          <form>
              {/* name and email */}
           <div className="flex items-center gap-4">
           <input
              type="text"
              placeholder="Name"
              defaultValue={employee.name}
              name="name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              placeholder="Email"
              defaultValue={employee.email}
              name="email"
              className="input input-bordered w-full"
              required
            />
           </div>
  
           {/* phone and role */}
            <div className="flex items-center gap-4 my-6">
            <input
              type="number"
              placeholder="Phone number"
              defaultValue={employee.phone}
              name="phone"
              className="input input-bordered w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              required
            />
            <select name="role" defaultValue={employee?.role} className="select select-bordered w-full">
              <option disabled>
               Role?
              </option>
              <option value="Mobile App Developer">Mobile App Developer</option>
              <option value="Web Developer">Web Developer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
            </select>
            </div>
            <button className="btn btn-block btn-primary">Save user</button>
          </form>
        </div>
      </div>
    )}
export default UpdateEmployee;