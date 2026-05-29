import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Cartitems from "./Cartitems"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import API_URL from "../../config"
const Cart = () => {

    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const [cartData, setCartData] = useState([])
    const [showPayment, setShowPayment] = useState(false)
    const [payment, setPayment] = useState("")

    const fetchData = async () => {

        const res = await axios.get(`${API_URL}/GetCart`)
        setCartData(res.data)

    }

    useEffect(() => {

        fetchData()

    }, [])

    const PlaceOrder = async () => {

        if (!payment) {

            alert("Select Payment Method")

            return

        }

        const total = cartData.reduce((acc, item) => {

            return acc + (item.price * item.quantity)

        }, 0)


        // Create Razorpay Order

        const res = await axios.post(`${API_URL}/CreateOrder`, {

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

                await axios.post(`${API_URL}/PlaceOrder`, {

                    customerName: state.name,

                    items: cartData,

                    totalAmount: total,

                    paymentMethod: payment

                })

                await axios.delete(`${API_URL}/ClearCart`)
                alert("Payment Successful ✅")
                navigate("/Orders")

            }

        }


        const razorpay = new window.Razorpay(options)

        razorpay.open()

    }

    return (

        <div className="min-h-screen bg-gradient-to-r pb-10 from-[#3e5151] via-[#decba4] to-[#3e5151] pt-10">

            {/* Navbar */}

            <div className="shadow-2xl flex justify-between items-center mx-10 p-4 rounded-t-2xl bg-white">

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

                    <div>

                        <button onClick={()=>{navigate("/Profile")}} className="p-1 text-white cursor-pointer w-20 bg-blue-600 rounded-full hover:bg-blue-800">
                            Profile
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


            {/* Cart Title */}

            <div className="shadow-2xl flex items-center mx-10 p-5 bg-white">

                <h1 className="font-bold text-2xl">
                    Your Cart
                </h1>

            </div>


            {/* Cart Items */}
            <div className="mx-10 bg-white p-5 flex flex-col gap-5 rounded-b-2xl">

                {
                    cartData.length > 0 ?

                        cartData.map((item, index) => (

                            <Cartitems
                                key={index}
                                item={item}
                                fetchData={fetchData}
                            />

                        ))

                        :

                        <h1 className="text-center text-2xl font-bold py-10">

                            Cart is Empty

                        </h1>
                }


                {
                    cartData.length > 0 && (

                        <div className="flex flex-col items-center gap-5 mt-5">

                            <button
                                onClick={() => setShowPayment(!showPayment)}
                                className="flex justify-center bg-black text-white py-3 rounded-xl hover:bg-gray-800 cursor-pointer text-lg font-semibold w-[40%] lg:w-[20%]"
                            >

                                Order Now

                            </button>


                            {
                                showPayment && (

                                    <div className="border rounded-2xl p-5 bg-gray-100 w-full lg:w-1/2 flex flex-col gap-5">

                                        <h1 className="font-bold text-xl">

                                            Select Payment Method

                                        </h1>


                                        <label className="flex items-center gap-3">

                                            <input
                                                type="radio"
                                                name="payment"
                                                value="Cash On Delivery"
                                                onChange={(e) => setPayment(e.target.value)}
                                            />

                                            Cash On Delivery

                                        </label>


                                        <label className="flex items-center gap-3">

                                            <input
                                                type="radio"
                                                name="payment"
                                                value="UPI"
                                                onChange={(e) => setPayment(e.target.value)}
                                            />

                                            UPI

                                        </label>


                                        <button
                                            onClick={PlaceOrder}
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

            </div>

        </div>

    )

}

export default Cart