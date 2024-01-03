import Dashboard from "../../components/Dashboard/Dashboard";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
    return(
        <div className="grid grid-cols-12 min-h-screen">
            {/* sidebar */}
            <div className="col-span-2 bg-black">
               <Sidebar/>
            </div>

            {/* dashboard */}
            <div className="col-span-10">
                <Dashboard/>
            </div>
        </div>
    )}
export default Home;