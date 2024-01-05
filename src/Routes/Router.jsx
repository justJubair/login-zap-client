import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Board from "../components/Board/Board";
import Setting from "../pages/Dashboard/Setting";
import PrivateRoute from "./PrivateRoute";
import AddEmployee from "../components/AddEmployee/AddEmployee";
import UpdateEmployee from "../components/UpdateEmployee/UpdateEmployee";
import EmployeeDetails from "../components/EmployeeDetails/EmployeeDetails";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard/></PrivateRoute>,
        children: [
            {
                path: "/dashboard/manageUsers",
                element: <PrivateRoute><Board/></PrivateRoute>
            },
            {
                path: "/dashboard/setting",
                element: <Setting/>
            },
            {
                path: "/dashboard/addEmployee",
                element: <AddEmployee/>
            },
            {
                path: "/dashboard/updateEmployee/:id",
                element: <UpdateEmployee/>
            },
            {
                path: "/dashboard/employeeDetails/:id",
                element: <EmployeeDetails/>
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    }
])

export default Router