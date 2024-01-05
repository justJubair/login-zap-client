import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://login-zap-server.vercel.app/employee/${id}`)
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }, [id]);

  
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-start">{employee?.name}</h1>
         <div className="text-start space-y-2 my-4">
         <p className="">Phone: {employee?.phone}</p>
          <p className="">Email: {employee?.email}</p>
          <p className="">Role: {employee?.role}</p>
         </div>
          <Link to="/dashboard/manageUsers" className="btn btn-primary">Go Back</Link>
        </div>
      </div>
    </div>
  );
};
export default EmployeeDetails;
