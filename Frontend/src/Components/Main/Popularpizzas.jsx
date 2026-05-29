import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import API_URL from "../../config"

const Popularpizzas = () => {

    const navigate = useNavigate()

    const [pizza, setpizza] = useState([

        {
            image: "/assets/p4.webp",
            name: "Margherita",
            price: "₹299",
            star: "4.6",
        },

        {
            image: "/assets/p9.png",
            name: "Farmhouse",
            price: "₹349",
            star: "4.7",
        },

        {
            image: "/assets/p5.png",
            name: "Peppy Paneer",
            price: "₹379",
            star: "4.8",
        },

        {
            image: "/assets/p7.png",
            name: "Chicken Feast",
            price: "₹399",
            star: "4.8",
        },

    ])

    const func = async (item) => {

        const data = await axios.post(`${API_URL}/AddCart`, {

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

        <div className="bg-white px-10 py-8">

            <div className="flex justify-between items-center mb-7">

                <h1 className="text-3xl font-bold">
                    Popular Pizzas
                </h1>

                <button
                    onClick={() => navigate("/Menu")}
                    className="text-[#ED5006] font-semibold hover:underline cursor-pointer">

                    View All

                </button>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 cursor-pointer">

                {pizza.map((item, index) => {

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
                                        Rs. : {item.price}
                                    </p>

                                    <div className="flex items-center gap-1">

                                        <i
                                            className="fa-solid fa-star text-sm"
                                            style={{ color: "#ED5006" }}
                                        ></i>

                                        <span className="font-semibold">
                                            {item.star}
                                        </span>

                                    </div>

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

export default Popularpizzas