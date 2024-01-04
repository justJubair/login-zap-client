import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-transparent.svg"
const Login = () => {
  return (
    <div>
       <Link to="/"> <img className="absolute w-28 bg-[#4545b1] top-4 left-4 rounded px-2 py-1" src={logo} alt="logo" /></Link>
      <div className="hero min-h-screen bg-base-200">
        <div className="w-full flex flex-col items-center space-y-8">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#4545b1] text-white">Login</button>
              </div>
            </form>
            <div className="flex items-center justify-between px-4 py-2">
                <p className="text-base font-medium">New to Login Zap?</p>
                <Link to="/register" className="btn btn-link text-base">Register Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
