import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Profile = () => {
    const username = localStorage.getItem("username")
    const navigate = useNavigate()

    const logout = () => {

        localStorage.removeItem("login")
        localStorage.removeItem("username")
        localStorage.removeItem("role")

        navigate("/Login")

    }

    return (

        <div className='min-h-screen bg-gradient-to-r from-[#3e5151] via-[#decba4] to-[#3e5151] p-5'>

            {/* Navbar */}

            <div className='bg-white rounded-2xl shadow-xl p-4 flex justify-between items-center'>

                <div className='flex items-center gap-2'>

                    <i
                        className="fa-brands fa-pixiv fa-2xl"
                        style={{ color: "rgb(237, 80, 6)" }}
                    ></i>

                    <h1 className='font-bold text-xl'>

                        Pizza
                        <span className='text-orange-500'> Palace</span>

                    </h1>

                </div>

                <div className='flex gap-5 items-center'>

                    <Link to="/" className='font-semibold hover:text-red-500'>
                        Home
                    </Link>

                    <Link to="/Orders" className='font-semibold hover:text-red-500'>
                        Orders
                    </Link>

                </div>

            </div>


            {/* Profile Card */}

            <div className='flex justify-center items-center mt-10'>

                <div className='bg-white w-full max-w-md rounded-3xl shadow-2xl p-8'>

                    {/* Profile Image */}

                    <div className='flex justify-center'>

                        <div className='w-28 h-28 rounded-full bg-orange-100 flex items-center justify-center shadow-lg'>

                            <i
                                className="fa-solid fa-user text-5xl text-orange-500"
                            ></i>

                        </div>

                    </div>


                    {/* User Details */}

                    <div className='mt-8 flex flex-col gap-5'>

                        <div>

                            <p className='text-gray-500 font-semibold'>
                                Username
                            </p>

                            <h1 className='text-2xl font-bold text-gray-800'>
                                {username}
                            </h1>

                        </div>


                        <div>

                            <p className='text-gray-500 font-semibold'>
                                Email
                            </p>

                            <h1 className='text-lg text-gray-800'>
                                shyam@gmail.com
                            </h1>

                        </div>


                        <div>

                            <p className='text-gray-500 font-semibold'>
                                Phone
                            </p>

                            <h1 className='text-lg text-gray-800'>
                                +91 9876543210
                            </h1>

                        </div>

                    </div>


                    {/* Buttons */}

                    <div className='flex flex-col gap-4 mt-8'>

                        <button className='bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 font-semibold'>

                            Edit Profile

                        </button>

                        <button
                            onClick={logout}
                            className='bg-red-500 text-white py-3 rounded-xl hover:bg-red-700 font-semibold'
                        >

                            Logout

                        </button>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Profile