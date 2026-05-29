import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Feedback = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        fetchData()

    }, [])

    const fetchData = async () => {

        try {

            const res = await axios.get("http://localhost:3000/GetFeedback")

            setData(res.data)

        }

        catch (err) {
            console.log(err)
        }

    }

    return (

        <div className='p-5 bg-gray-100 min-h-screen'>

            <h1 className='text-3xl font-bold mb-6'>
                Customer Feedback
            </h1>

            <div className='grid lg:grid-cols-3 gap-5'>

                {
                    data.map((item, index) => (

                        <div key={index} className='bg-white p-5 rounded-xl shadow'>

                            <h1 className='text-lg font-semibold'>
                                {item.email}
                            </h1>

                            <p className='mt-4'>
                                {item.message}
                            </p>
                            <p className='mt-4 flex gap-1'>
                                {
                                    [...Array(Number(item.rating || 0))].map((_, index) => (
                                        <i
                                            key={index}
                                            className="fa-solid fa-star text-yellow-400"
                                        ></i>
                                    ))
                                }
                            </p>
                        </div>

                    ))
                }

            </div>

        </div>

    )
}

export default Feedback