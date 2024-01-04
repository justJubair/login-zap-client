import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-transparent.svg";
const Register = () => {
  return (
    <div>
      <Link to="/">
        {" "}
        <img
          className="absolute w-28 bg-[#4545b1] top-4 left-4 rounded px-2 py-1"
          src={logo}
          alt="logo"
        />
      </Link>
      <div className="hero min-h-screen bg-base-200">
        <div className="w-full flex flex-col items-center space-y-8">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
            <form className="card-body">
                {/* name and email */}
              <div className="flex items-center justify-between gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              </div>

              {/* phone and gender */}
              <div className="flex items-center justify-between gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="phone number"
                  className="input input-bordered [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <select defaultValue="male" name="gender" className="select select-bordered w-full">
                  
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>
              </div>
             
             {/* checkbox */}
              <div className="form-control">
                <label className="label">
                  <span>How did you hear about this?</span>
                </label>

              <div className="flex justify-around items-center my-2">
              <div className="flex items-center gap-2">
              
              <input
                type="checkbox"
                className="checkbox"
                required
              />
               <span className="label-text">Linkedin</span>
             </div>
             <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox"
                required
              />
               <span className="label-text">Friends</span>
             </div>
             <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox"
                required
              />
               <span className="label-text">Job Portal</span>
             </div>
             <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox"
                required
              />
               <span className="label-text">Others</span>
             </div>
              </div>
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#4545b1] text-white">
                  Register
                </button>
              </div>
            </form>
            <div className="flex items-center justify-between px-4 py-2">
              <p className="text-base font-medium">Already have an account?</p>
              <Link to="/login" className="btn btn-link text-base">
                Login Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
