import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Contactfooter from "./Contactfooter";
import Feedback from "./Feedback";
const Contacts = () => {
    const [open, setOpen] = useState(false);
    const state = localStorage.getItem("login")
    const navigate = useNavigate()

    const func = () => {
        navigate("/Login")
    }

    const func1 = () => {
        if (state) {
            navigate("/Profile")
        }
        else {
            navigate("/Login")
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-r pb-10  from-[#3e5151] via-[#decba4] to-[#3e5151] pt-10">

            {/*Nav bar*/}
            <div className="shadow-2xl flex justify-between items-center lg:mx-10 md:mx-5 mx-3 p-4 rounded-t-2xl bg-white">

                <div className="flex items-center justify-center gap-2">
                    <i className="fa-brands fa-pixiv fa-2xl" style={{ color: "rgb(237, 80, 6)" }}></i>
                    <h1 className="font-semibold text-xl leading-6">
                        Pizza <br />
                        <span className="text-[#ed5006]">Palace</span>
                    </h1>
                </div>

                <div className="lg:flex gap-10 hidden items-center">
                    <Link to="/" className="hover:underline hover:text-red-500 font-semibold">Home</Link>
                    <Link to="/Menu" className="hover:underline hover:text-red-500 font-semibold">Menu</Link>
                    <Link to="/Cart" className="hover:underline hover:text-red-500 font-semibold">Cart</Link>
                    <Link to="/Orders" className="hover:underline hover:text-red-500 font-semibold">Orders</Link>
                    <Link to="/Contacts" className="hover:underline hover:text-red-500 font-semibold">Contact</Link>


                </div>

                <div className="lg:flex hidden gap-3">
                    <button onClick={()=>{navigate("/Profile")}} className="p-1 text-white cursor-pointer w-20 bg-blue-600 rounded-full hover:bg-blue-800">
                        Profile
                    </button>
                </div>

                <div className="lg:hidden flex items-center gap-5">


                    <button onClick={()=>{navigate("/Profile")}} className="p-1 text-white cursor-pointer w-20 bg-blue-600 rounded-full hover:bg-blue-800">
                        Profile
                    </button>                    

                    <i
                        onClick={() => setOpen(true)}
                        className="fa-solid fa-bars cursor-pointer"
                        style={{ color: "rgb(22, 22, 22)" }}
                    ></i>
                </div>


                <div className={`fixed top-0 right-0 bg-black text-white w-1/2 h-screen flex flex-col p-10 gap-10 z-40 transition-transform duration-700 ${open ? "translate-x-0" : "translate-x-full"}`}>
                    <i onClick={() => setOpen(false)} className="fa-solid fa-xmark absolute right-10 cursor-pointer hover:text-amber-300" style={{ color: "white" }}></i>

                    <Link to="/" className="hover:underline mt-10 hover:text-red-500 font-semibold">
                        Home
                    </Link>
                    <Link to="/Menu" className="hover:underline hover:text-red-500 font-semibold">
                        Menu
                    </Link>
                    <Link to="/Cart" className="hover:underline hover:text-red-500 font-semibold">
                        Cart
                    </Link>
                    <Link to="/Orders" className="hover:underline hover:text-red-500 font-semibold">
                        Orders
                    </Link>
                    <Link to="/Contacts" className="hover:underline hover:text-red-500 font-semibold">
                        Contact
                    </Link>
                </div>
            </div>


            {/*Feedback*/}
            <Feedback />

            {/*Footer */}
            <Contactfooter />

        </div >

    )
}
export default Contacts