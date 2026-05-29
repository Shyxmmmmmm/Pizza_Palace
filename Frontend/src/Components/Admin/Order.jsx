import React, { useEffect, useState } from 'react'
import axios from 'axios'
import API_URL from '../../config'

const Orders = () => {

    const [orders, setOrders] = useState([])

    const fetchOrders = async () => {

        const res = await axios.get(`${API_URL}/AdminOrders`)

        setOrders(res.data)

    }

    useEffect(() => {

        fetchOrders()

    }, [])

    return (

        <div className='p-5 bg-gray-100 min-h-screen'>

            <h1 className='text-3xl font-bold mb-6'>
                Orders
            </h1>

            <div className='bg-white p-5 rounded-xl shadow overflow-x-auto'>

                <table className='w-full'>

                    <thead>

                        <tr className='border-b'>

                            <th className='p-3 text-left'>
                                Order ID
                            </th>

                            <th className='p-3 text-left'>
                                Customer
                            </th>

                            <th className='p-3 text-left'>
                                Amount
                            </th>

                            <th className='p-3 text-left'>
                                Payment
                            </th>

                            <th className='p-3 text-left'>
                                Status
                            </th>

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
                                        {item.orderId}
                                    </td>

                                    <td className='p-3'>
                                        {item.customerName}
                                    </td>

                                    <td className='p-3'>
                                        ₹{item.totalAmount}
                                    </td>

                                    <td className='p-3'>
                                        {item.paymentMethod}
                                    </td>

                                    <td
                                        className={`p-3 font-semibold ${
                                            item.status === "Preparing"
                                                ? "text-orange-500"
                                                : "text-green-500"
                                        }`}
                                    >

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

export default Orders