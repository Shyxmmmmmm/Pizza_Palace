import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import API_URL from "../../config"
const Signup = () => {
    const [ip1, setip1] = useState('')
    const [ip2, setip2] = useState('')
    const [ip3, setip3] = useState('')
    const [dis, setdis] = useState(false)
    const role='user'
    const navigate = useNavigate()
    const func = async () => {
        try {
            setdis(true)
            if (!ip1 || !ip2 || !ip3) {
                alert("Fill all fields")
                return
            }

            if (ip2 !== ip3) {
                alert("Passwords not match")
                return
            }

            const res = await axios.post(`${API_URL}/Signup`, { username: ip1, password: ip2 ,role:role})

            if (res.data === true) {
                setTimeout(() => {
                    alert("Signup success")
                    navigate('/Login')
                }, 2000);

            } else {
                setTimeout(() => {
                    alert("User already exists")
                    setdis(false)
                }, 2000);
            }
        }
        catch (err) {
            if (err.response) {
                alert("Server error: " + err.response.status)
            } else if (err.request) {
                alert("No response (backend sleeping, wait & retry)")
            } else {
                alert("Error: " + err.message)
            }
            setdis(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-r pb-10 flex flex-col items-center justify-center from-[#3e5151] via-[#decba4] to-[#3e5151] pt-10">
            <div className="bg-amber-600 flex flex-col w-[30%] p-3 rounded-t-2xl items-center">
                <h1 className="text-xl font-semibold text-white">The Pizza Palace</h1>
            </div>
            <div className="bg-white  flex flex-col gap-5 p-5 w-[30%] items-center rounded-b-2xl">
                <h1 className="text-lg font-semibold mb-5">Create Account</h1>
                <input value={ip1} onChange={(e) => { setip1(e.target.value) }} type="text" placeholder="Email or phone number" className="border p-2 bg-white rounded w-[90%]" />
                <input value={ip2} onChange={(e) => { setip2(e.target.value) }} type="password" placeholder="Password" className="border p-2 bg-white w-[90%] rounded" />
                <input value={ip3} onChange={(e) => { setip3(e.target.value) }} type="password" placeholder="Confirm password" className="border p-2 bg-white w-[90%] rounded" />
                <button onClick={func} disabled={dis} className="border p-2 bg-[#E17100] text-white cursor-pointer w-[90%] rounded hover:bg-amber-700">{dis ? "Signing up" : "Signup"}</button>
                <p onClick={() => { navigate("/Login") }} className="cursor-pointer  hover:underline hover:text-[#E17100]">Already have an account</p>
            </div>
        </div>
    )
}
export default Signup