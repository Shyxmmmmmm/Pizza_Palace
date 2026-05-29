import axios from "axios"
import { useState } from "react"

const Cartitems = ({ item, fetchData }) => {

    const [showOrder, setShowOrder] = useState(false)

    const [payment, setPayment] = useState("")

    const DeleteItem = async () => {

        await axios.delete(`http://localhost:3000/DeleteCart/${item._id}`)

        fetchData()

    }

    const Increase = async () => {

        await axios.put(`http://localhost:3000/Increase/${item._id}`)

        fetchData()

    }

    const Decrease = async () => {

        await axios.put(`http://localhost:3000/Decrease/${item._id}`)

        fetchData()

    }

    const OrderThis = async () => {

        if (!payment) {

            alert("Select Payment Method")

            return

        }

        const total = item.price * item.quantity


        // CASH ON DELIVERY

        if (payment === "Cash On Delivery") {

            await axios.post("http://localhost:3000/PlaceOrder", {

                customerName: "Shyam",

                items: [item],

                totalAmount: total,

                paymentMethod: payment

            })

            await axios.delete(`http://localhost:3000/DeleteCart/${item._id}`)

            alert("Order Placed Successfully ✅")

            return
        }


        // UPI PAYMENT

        const res = await axios.post("http://localhost:3000/CreateOrder", {

            amount: total

        })


        const options = {

            key: import.meta.env.VITE_RAZORPAY_KEY_ID,

            amount: res.data.amount,

            currency: "INR",

            name: "Pizza Palace",

            description: "Pizza Order",

            order_id: res.data.id,


            handler: async function (response) {

                await axios.post("http://localhost:3000/PlaceOrder", {

                    customerName: "Shyam",

                    items: [item],

                    totalAmount: total,

                    paymentMethod: payment

                })

                await axios.delete(`http://localhost:3000/DeleteCart/${item._id}`)

                alert("Payment Successful ✅")

            }

        }


        const razorpay = new window.Razorpay(options)

        razorpay.open()

    }

    return (

        <div className="border rounded-xl p-5 shadow-md">

            <div className="flex flex-col lg:flex-row justify-between items-center">

                <div className="flex items-center gap-5">

                    <img
                        src={item.img.replace("/src", "")}
                        alt={item.name}
                        className="w-28 h-28 object-contain"
                    />

                    <div>

                        <h1 className="font-bold text-xl">

                            {item.name}

                        </h1>

                        <p className="text-gray-500">

                            Delicious Pizza

                        </p>

                        <p className="font-semibold text-lg mt-2">

                            Rate: ₹{item.price * item.quantity}

                        </p>

                    </div>

                </div>


                <div className="flex items-center gap-5 mt-5 lg:mt-0">

                    <div className="flex items-center border rounded-lg overflow-hidden">

                        <button
                            onClick={Decrease}
                            className="px-4 py-2 bg-gray-100 hover:bg-gray-300 cursor-pointer"
                        >
                            -
                        </button>

                        <span className="px-5">

                            {item.quantity}

                        </span>

                        <button
                            onClick={Increase}
                            className="px-4 py-2 bg-gray-100 hover:bg-gray-300 cursor-pointer"
                        >
                            +
                        </button>

                    </div>


                    <button
                        onClick={DeleteItem}
                        className="text-red-500 hover:text-red-700 cursor-pointer"
                    >

                        <i className="fa-solid fa-trash"></i>

                    </button>

                </div>

            </div>


            {/* Order Section */}

            <div className="mt-5">

                <button
                    onClick={() => setShowOrder(!showOrder)}
                    className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 cursor-pointer"
                >

                    Order Now

                </button>

            </div>


            {
                showOrder && (

                    <div className="mt-5 border rounded-xl p-5 bg-gray-50 flex flex-col gap-5">

                        <h1 className="font-bold text-lg">

                            Select Payment Method

                        </h1>


                        <div className="flex flex-col gap-3">

                            <label className="flex items-center gap-2">

                                <input
                                    type="radio"
                                    name="payment"
                                    value="Cash On Delivery"
                                    onChange={(e) => setPayment(e.target.value)}
                                />

                                Cash On Delivery

                            </label>


                            <label className="flex items-center gap-2">

                                <input
                                    type="radio"
                                    name="payment"
                                    value="UPI"
                                    onChange={(e) => setPayment(e.target.value)}
                                />

                                UPI

                            </label>

                        </div>


                        <button
                            onClick={OrderThis}
                            className="bg-green-600 text-white py-3 rounded-xl hover:bg-green-700"
                        >

                            Confirm Order

                        </button>

                    </div>

                )
            }

        </div>

    )

}

export default Cartitems