import { Outlet } from "react-router-dom";
import Board from "../../components/Board/Board";
import Sidebar from "../../components/Sidebar/Sidebar";


const Dashboard = () => {
    return(
        <div className="grid grid-cols-12 min-h-screen">
            {/* sidebar */}
            <div className="col-span-2 bg-black">
               <Sidebar/>
            </div>

            {/* board */}
            <div className="col-span-10">
             <Outlet/>
            </div>
        </div>
    )}
export default Dashboard;