import { Link } from "react-router-dom";

const Banner = () => {
    return(
        <div>
            <img className="h-screen object-cover w-full transform -scale-x-100" src="https://raw.githubusercontent.com/justJubair/login-zap-client/main/src/assets/images/banner.jpg" alt="banner" />
            {/* overlay */}
            <div className="h-full w-full absolute top-0 left-0 bg-[#252ab4]/30"></div>

            {/* text content */}
            <div className="bg-gradient-to-r from-[#3b3ba2]/40 to-[#3b3ba2]/0 p-6 rounded-lg absolute top-1/3 lg:top-1/4 md:w-7/12 left-4 md:left-8 lg:left-16">
                <h1 className="text-4xl lg:text-6xl lg:leading-tight mb-2 font-black text-white">Elevate Your <span className="text-[#3b3ba2]">Experience</span> with <span className="text-[#3b3ba2]">Seamless</span> User <span className="text-[#3b3ba2]">Management</span></h1>
                <Link to="/login" className="">

                    <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 text-white text-lg rounded-lg font-bold duration-150 hover:scale-105">Explore</button>
                </Link>
            </div>
        </div>
    )}
export default Banner;