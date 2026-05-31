import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Services from "./Services";
import PopularPizzas from "./Popularpizzas";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const [open, setOpen] = useState(false);
    const [state, setState] = useState(localStorage.getItem("login"))
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

    const checkLogin = (path) => {
        if (state) {
            navigate(path)
        }
        else {
            alert("You need to Login First")
        }
    }

    useEffect(() => {
        setState(localStorage.getItem("login"))
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-r pb-10  from-[#3e5151] via-[#decba4] to-[#3e5151] pt-10">

            {/*Nav bar */}
            <div className="shadow-2xl flex justify-between items-center mx-10 p-4 rounded-t-2xl bg-white">

                <div className="flex items-center justify-center gap-2">
                    <i className="fa-brands fa-pixiv fa-2xl" style={{ color: "rgb(237, 80, 6)" }}></i>
                    <h1 className="font-semibold text-xl leading-6">
                        Pizza <br />
                        <span className="text-[#ed5006]">Palace</span>
                    </h1>
                </div>

                <div className="lg:flex gap-10 hidden items-center">

                    <Link to="/" className="hover:underline hover:text-red-500 font-semibold">
                        Home
                    </Link>

                    <button
                        onClick={() => checkLogin("/Menu")}
                        className="hover:underline hover:text-red-500 font-semibold cursor-pointer"
                    >
                        Menu
                    </button>

                    <button
                        onClick={() => checkLogin("/Cart")}
                        className="hover:underline hover:text-red-500 font-semibold cursor-pointer"
                    >
                        Cart
                    </button>

                    <button
                        onClick={() => checkLogin("/Orders")}
                        className="hover:underline hover:text-red-500 font-semibold cursor-pointer"
                    >
                        Orders
                    </button>

                    <button
                        onClick={() => checkLogin("/Contacts")}
                        className="hover:underline hover:text-red-500 font-semibold cursor-pointer"
                    >
                        Contact
                    </button>

                </div>

                <div className="lg:flex hidden gap-3">
                    <button
                        onClick={func1}
                        className="p-1 text-white cursor-pointer w-20 bg-blue-600 rounded-full hover:bg-blue-800"
                    >
                        {state ? "Profile" : "Login"}
                    </button>

                    {
                        state && (
                            <button
                                onClick={() => {
                                    localStorage.removeItem("login")
                                    setState(null)
                                }}
                                className="p-1 text-white cursor-pointer w-20 bg-red-600 rounded hover:bg-red-800"
                            >
                                Logout
                            </button>
                        )
                    }

                </div>

                <div className="lg:hidden flex items-center gap-5">

                    <div>
                        <button
                            onClick={() => {
                                if (state) {
                                    localStorage.removeItem("login")
                                    setState(null)
                                } else {
                                    navigate("/Login")
                                }
                            }}
                            className="border p-1 bg-[#ED5006] hover:bg-red-700 text-white rounded cursor-pointer w-20"
                        >
                            {state ? "Logout" : "Login"}
                        </button>
                    </div>

                    <i
                        onClick={() => setOpen(true)}
                        className="fa-solid fa-bars cursor-pointer"
                        style={{ color: "rgb(22, 22, 22)" }}
                    ></i>
                </div>


                <div className={`fixed top-0 right-0 bg-black text-white w-1/2 h-screen flex flex-col p-10 gap-10 z-40 transition-transform duration-700 ${open ? "translate-x-0" : "translate-x-full"}`}>

                    <i
                        onClick={() => setOpen(false)}
                        className="fa-solid fa-xmark absolute right-10 cursor-pointer hover:text-amber-300"
                        style={{ color: "white" }}
                    ></i>

                    <Link
                        to="/"
                        className="hover:underline mt-10 hover:text-red-500 font-semibold"
                    >
                        Home
                    </Link>

                    <button
                        onClick={() => checkLogin("/Menu")}
                        className="hover:underline hover:text-red-500 font-semibold text-left cursor-pointer"
                    >
                        Menu
                    </button>

                    <button
                        onClick={() => checkLogin("/Cart")}
                        className="hover:underline hover:text-red-500 font-semibold text-left cursor-pointer"
                    >
                        Cart
                    </button>

                    <button
                        onClick={() => checkLogin("/Orders")}
                        className="hover:underline hover:text-red-500 font-semibold text-left cursor-pointer"
                    >
                        Orders
                    </button>

                    <button
                        onClick={() => checkLogin("/Contacts")}
                        className="hover:underline hover:text-red-500 font-semibold text-left cursor-pointer"
                    >
                        Contact
                    </button>

                </div>
            </div>


            {/*Hero bar */}

            <div className="shadow-2xl flex items-center mx-10 bg-white">
                <Hero />
            </div>

            {/*services */}
            <div className="shadow-2xl  mx-10 bg-white">
                <Services></Services>
            </div>

            {/*Popular pizzas */}
            <div className="shadow-2xl  mx-10 bg-white">
                <PopularPizzas />
            </div>



            {/* */}
            <div className="shadow-2xl  mt-5  mx-10 bg-white flex gap-2 justify-between lg:p-10  lg:pr-40 p-2 p-4">
                <div className="lg:pl-10 pl-2">
                    <h1 className="font-bold lg:text-2xl text-[#373636]">The Pizza Palace</h1>
                    <p className="mt-3 text-gray-600 lg:text-base text-xs">Our job is to fill your tummy with <br />Delicious Food</p>
                </div>
                <div>
                    <h1 className="font-semibold lg:text-2xl mb-5 text-[#373636]">About</h1>
                    <ul className="flex flex-col gap-5 lg:text-base text-xs text-gray-600">
                        <li className="hover:text-black cursor-pointer">AboutUs</li>
                        <li className="hover:text-black cursor-pointer">Features</li>
                        <li className="hover:text-black cursor-pointer">News</li>
                        <li className="hover:text-black cursor-pointer">Menu</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-semibold lg:text-2xl mb-5 text-[#373636]">Company</h1>
                    <ul className="flex flex-col gap-5 lg:text-base text-xs text-gray-600 ">
                        <li className="hover:text-black cursor-pointer">My Food In</li>
                        <li className="hover:text-black cursor-pointer">Partner</li>
                        <li className="hover:text-black cursor-pointer">FAQ</li>
                        <li className="hover:text-black cursor-pointer">Blog</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-semibold lg:text-2xl mb-5 text-[#373636]">Support</h1>
                    <ul className="flex flex-col gap-5 lg:text-base text-xs text-gray-600">
                        <li className="hover:text-black cursor-pointer">Account</li>
                        <li className="hover:text-black cursor-pointer">Support Center</li>
                        <li className="hover:text-black cursor-pointer">Feedback</li>
                        <li className="hover:text-black cursor-pointer">Contact Us</li>
                        <li className="hover:text-black cursor-pointer">Accessibility</li>
                    </ul>
                </div>
            </div>

        </div >
    );
};

export default Home;