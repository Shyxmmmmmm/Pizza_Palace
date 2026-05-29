import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import API_URL from '../../config'

const Items = () => {

    const navigate = useNavigate()

    const [category, setCategory] = useState("All")

    const [pizza, setPizza] = useState([])

    useEffect(() => {

        axios.get(`${API_URL}/get`)
            .then((res) => {

                setPizza(res.data)

            })

    }, [])

    let filteredCard

    if (category === "All") {

        filteredCard = pizza

    }

    else {

        filteredCard = pizza.filter((item) => {

            return item.category?.toLowerCase() === category.toLowerCase()

        })

    }

    const func = async (item) => {

        const data = await axios.post(`${API_URL}/AddCart`, {
            id:item.id,
            name: item.name,
            price: item.price,
            img: item.image

        })

        if (data.data === true) {

            alert("Item Added")

            navigate("/Cart")

        }

    }

    return (

        <div>

            <h1 className="font-bold text-2xl px-5 pt-2 pb-2">
                Our Menu
            </h1>

            <p className="text-lg px-5">
                Choose your favorite Pizza
            </p>

            <div className="px-5 mt-5 grid grid-cols-3 lg:grid-cols-5 gap-5 pb-10">

                <button
                    onClick={() => setCategory("All")}
                    className="w-20 bg-gray-200 shadow-xl p-2 rounded hover:bg-red-500 hover:text-white">

                    All

                </button>

                <button
                    onClick={() => setCategory("Veg")}
                    className="w-20 bg-gray-200 shadow-xl p-2 rounded hover:bg-red-500 hover:text-white">

                    Veg

                </button>

                <button
                    onClick={() => setCategory("Non-Veg")}
                    className="w-20 bg-gray-200 shadow-xl p-2 rounded hover:bg-red-500 hover:text-white">

                    Non-Veg

                </button>

                <button
                    onClick={() => setCategory("Sides")}
                    className="w-20 bg-gray-200 shadow-xl p-2 rounded hover:bg-red-500 hover:text-white">

                    Sides

                </button>

                <button
                    onClick={() => setCategory("Drinks")}
                    className="w-20 bg-gray-200 shadow-xl p-2 rounded hover:bg-red-500 hover:text-white">

                    Drinks

                </button>

            </div>

            <div className="px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 cursor-pointer">

                {filteredCard.map((item, index) => {

                    return (

                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl duration-300">

                            <div className="bg-[#f5f1ee] h-40 flex items-center justify-center">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-contain p-3"
                                />

                            </div>

                            <div className="p-4 flex items-center justify-between">

                                <div className="flex flex-col justify-between gap-1 mt-2">

                                    <h2 className="font-bold text-lg">
                                        {item.name}
                                    </h2>
                                    <p className="font-semibold">
                                        Item id : {item.id}
                                    </p>

                                    <p className="font-semibold">
                                        Rs. : {item.price}
                                    </p>

                                </div>

                                <div>

                                    <button
                                        onClick={() => func(item)}
                                        className="hover:bg-red-700 bg-[#DB140C] rounded-full cursor-pointer w-8 p-1">

                                        <span className="text-white">
                                            +
                                        </span>

                                    </button>

                                </div>

                            </div>

                        </div>

                    )

                })}

            </div>

        </div>

    )

}

export default Items