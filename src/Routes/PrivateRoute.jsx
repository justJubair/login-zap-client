/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    if(loading){
        return <Loader/>
    }
    if(user){
        return children
    } else{
        return <Navigate to="/login"/>
    }
   }
export default PrivateRoute;