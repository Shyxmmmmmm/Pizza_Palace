import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import API_URL from "../../config"
import {
    FaPizzaSlice,
    FaUsers,
    FaShoppingCart,
    FaRupeeSign
} from 'react-icons/fa'

const Dashboard = () => {

    const navigate = useNavigate()

    const [orders, setOrders] = useState([])

    const logout = () => {

        localStorage.removeItem("login")

        navigate("/Login")

    }

    const fetchOrders = async () => {

        const res = await axios.get(`${API_URL}/AdminOrders`)
        setOrders(res.data)
    }

    useEffect(() => {

        fetchOrders()

    }, [])


    const revenue = orders.reduce((total, item) => {
        return total + item.totalAmount
    }, 0)

    return (

        <div className='p-5 bg-gray-100 min-h-screen'>

            <div className='flex justify-between items-center mb-6'>

                <h1 className='text-3xl font-bold'>
                    Dashboard
                </h1>

                <button
                    onClick={logout}
                    className='bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-700'
                >
                    Logout
                </button>

            </div>

            {/* TOP CARDS */}

            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5'>

                <div className='bg-white p-5 rounded-xl shadow flex justify-between items-center'>

                    <div>
                        <p className='text-gray-500'>Total Orders</p>

                        <h1 className='text-3xl font-bold'>
                            {orders.length}
                        </h1>
                    </div>

                    <FaShoppingCart className='text-4xl text-orange-500' />

                </div>

                <div className='bg-white p-5 rounded-xl shadow flex justify-between items-center'>

                    <div>
                        <p className='text-gray-500'>Revenue</p>

                        <h1 className='text-3xl font-bold'>
                            ₹{revenue}
                        </h1>
                    </div>

                    <FaRupeeSign className='text-4xl text-green-500' />

                </div>

                <div className='bg-white p-5 rounded-xl shadow flex justify-between items-center'>

                    <div>
                        <p className='text-gray-500'>Users</p>

                        <h1 className='text-3xl font-bold'>
                            230
                        </h1>
                    </div>

                    <FaUsers className='text-4xl text-blue-500' />

                </div>

                <div className='bg-white p-5 rounded-xl shadow flex justify-between items-center'>

                    <div>
                        <p className='text-gray-500'>Pizzas</p>

                        <h1 className='text-3xl font-bold'>
                            42
                        </h1>
                    </div>

                    <FaPizzaSlice className='text-4xl text-red-500' />

                </div>

            </div>

            {/* ORDERS TABLE */}

            <div className='bg-white mt-10 p-5 rounded-xl shadow overflow-auto'>

                <h1 className='text-2xl font-semibold mb-5'>
                    Recent Orders
                </h1>

                <table className='w-full'>

                    <thead>

                        <tr className='border-b'>

                            <th className='p-3 text-left'>Order Id</th>

                            <th className='p-3 text-left'>Customer</th>

                            <th className='p-3 text-left'>Amount</th>

                            <th className='p-3 text-left'>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            orders.map((item, index) => (

                                <tr
                                    key={index}
                                    className='border-b'
                                >

                                    <td className='p-3'>
                                        {item._id.slice(-5)}
                                    </td>

                                    <td className='p-3'>
                                        {item.customerName}
                                    </td>

                                    <td className='p-3'>
                                        ₹{item.totalAmount}
                                    </td>

                                    <td className='p-3 text-green-500'>
                                        {item.status}
                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    )

}

export default Dashboard