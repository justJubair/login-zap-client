
const Banner = () => {
    return(
        <div>
            <img className="h-screen object-cover w-full transform -scale-x-100" src="https://raw.githubusercontent.com/justJubair/login-zap-client/main/src/assets/images/banner.jpg" alt="banner" />
            {/* overlay */}
            <div className="h-full w-full absolute top-0 left-0 bg-[#252ab4]/50"></div>
        </div>
    )}
export default Banner;