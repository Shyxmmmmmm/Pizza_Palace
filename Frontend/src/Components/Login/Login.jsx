import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import API_URL from "../../config"
const Login = () => {
    const navigate = useNavigate()
    const [ip1, setip1] = useState("")
    const [ip2, setip2] = useState("")
    const [role, setRole] = useState("user")
    const [disable, setdisable] = useState(false)

    const redirect=()=>{
        if(role==="user"){
            return true
        }
        else{
            return false
        }
    }

    const func = async () => {
        try {
            setdisable(true)
            const res = await axios.post(`${API_URL}/Login`, { username: ip1, password: ip2 ,role:role})

            if (res.data === true && role==='user') {
                localStorage.setItem("login", "true")
                localStorage.setItem("role", role)
                setTimeout(() => {
                    navigate("/")
                }, 2000);

            }
            else if(res.data === true && role==='admin'){
                localStorage.setItem("login", "true")
                localStorage.setItem("role", role)
                setTimeout(() => {
                    navigate("/admin")
                }, 2000);
            }
            else {
                setTimeout(() => {
                    alert("Incorrect Username or Password")
                    setdisable(false)
                }, 2000);
            }
        }
        catch (err) {
            setTimeout(() => {
                alert("Server Error or Netwrok Issue")
                setdisable(false)
            }, 2000);

        }
    }
    return (
        <div className="min-h-screen bg-gradient-to-r pb-10 flex flex-col items-center justify-center from-[#3e5151] via-[#decba4] to-[#3e5151] pt-10">
            <div className="bg-amber-600 flex flex-col lg:w-[30%] w-[70%] p-3 rounded-t-2xl items-center">
                <h1 className="text-xl font-semibold text-white">The Pizza Palace</h1>
            </div>
            <div className="bg-white  flex flex-col gap-5 p-5 lg:w-[30%] w-[70%] items-center rounded-b-2xl">
                <h1 className="text-lg font-semibold mb-5">Welcome Back 👋</h1>
                <div className="flex justify-center gap-20 mb-6">
                    <div
                        onClick={() => {setRole("user")
                            setip1("")
                            setip2("")}
                        }
                        className={`cursor-pointer pb-2 text-lg font-semibold transition-all duration-300 ${role === "user"
                            ? "text-orange-500 border-b-2 border-orange-500"
                            : "text-gray-500"}`}
                    >
                        User
                    </div>

                    <div
                        onClick={() => {setRole("admin")
                            setip1("")
                            setip2("")}
                        }
                        className={`cursor-pointer pb-2 text-lg font-semibold transition-all duration-300 ${role === "admin"
                            ? "text-orange-500 border-b-2 border-orange-500"
                            : "text-gray-500"}`}
                    >
                        Admin
                    </div>
                </div>
                
                <input value={ip1} onChange={(e) => { setip1(e.target.value) }} type="text" placeholder="Email or phone number" className="border p-2 bg-white rounded w-[90%]" />
                <input value={ip2} onChange={(e) => { setip2(e.target.value) }} type="password" placeholder="Password" className="border p-2 bg-white w-[90%] rounded" />
                <button disabled={disable} onClick={func} className="border p-2 bg-[#E17100] text-white cursor-pointer w-[90%] rounded hover:bg-amber-700">{disable ? "Logging..." : "Login"}</button>
                <p onClick={() => { navigate("/Signup") }} className="cursor-pointer  hover:underline hover:text-[#E17100]">{redirect()?"Create an account":""}</p>
            </div>
        </div>
    )
}
export default Login