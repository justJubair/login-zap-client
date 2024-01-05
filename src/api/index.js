import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000"
})

// POST; a user
export const saveUser = async(user)=>{
    try{
        const res = await axiosInstance.post("/users", user)
        return res.data
    }
    catch(err){
        console.log(err)
    }
}