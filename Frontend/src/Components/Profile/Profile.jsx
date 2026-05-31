import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import API_URL from '../../config'
const Profile = () => {
    const username = localStorage.getItem("username")
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [edit, setEdit] = useState(false)

    const fetchProfile = async () => {

        const res = await axios.get(
            `${API_URL}/Profile/${username}`
        )

        setEmail(res.data?.email || "")
        setPhone(res.data?.phone || "")
    }

    useEffect(() => {

        fetchProfile()

    }, [])

    const logout = () => {

        localStorage.removeItem("login")
        localStorage.removeItem("username")
        localStorage.removeItem("role")

        navigate("/Login")

    }

    const saveProfile = async () => {

        const res = await axios.put(
            `${API_URL}/UpdateProfile`,
            {
                username,
                email,
                phone
            }
        )

        if (res.data === true) {

            alert("Profile Updated")

            setEdit(false)

        }
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

                            {
                                edit ?

                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className='border p-2 rounded w-full'
                                    />

                                    :

                                    <h1 className='text-lg text-gray-800'>
                                        {email || "-"}
                                    </h1>
                            }
                        </div>

                        <div>
                            <p className='text-gray-500 font-semibold'>
                                Phone
                            </p>
                            {
                                edit ?
                                    <input
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className='border p-2 rounded w-full'
                                    />
                                    :
                                    <h1 className='text-lg text-gray-800'>
                                        {phone || "-"}
                                    </h1>
                            }
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className='flex flex-col gap-4 mt-8'>
                        <button
                            onClick={() => {
                                if (edit) {
                                    saveProfile()
                                }
                                else {
                                    setEdit(true)
                                }

                            }}
                            className='bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 font-semibold'
                        >

                            {edit ? "Save Profile" : "Edit Profile"}

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