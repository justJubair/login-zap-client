const { useContext } = require("react")
const { AuthContext } = require("../Provider/AuthProvider")

const useAuth = ()=>{
    const all = useContext(AuthContext)
    return all
}

export default useAuth