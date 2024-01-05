import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5000"
})

// POST; an user
export const saveUser = async(user)=>{
    try{
        const res = await axiosInstance.post("/users", user)
        return res.data
    }
    catch(err){
        console.log(err)
    }
}

// POST; an employee
export const saveEmployee = async(employee)=>{
    try{
        const res = await axiosInstance.post("/employees", employee)
        return res.data
    }
    catch(err){
        console.log(err)
    }
}

// PATCH; an employee
export const updateEmployee = async(_id, employee)=>{
    try{
        const res = await axiosInstance.patch(`/employee/${_id}`, employee)
        return res.data
    }
    catch(err){
        console.log(err)
    }
}




