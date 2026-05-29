const Orderitems = ({ item }) => {
    return (
        <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-8 border border-gray-100">
            {/* Top */}

            <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 mb-10">

                <div>

                    <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
                        Order Summary
                    </h1>

                    <p className="text-gray-500 mt-2 text-sm md:text-base">
                        Your order has been placed successfully
                    </p>

                </div>

                <div>

                    <span className="bg-green-100 text-green-700 px-5 py-2 md:px-6 md:py-3 rounded-full font-bold text-sm md:text-lg shadow">

                        {item.status}

                    </span>

                </div>

            </div>


            {/* Heading */}

            <div className="hidden lg:grid grid-cols-[2fr_1fr_1fr] bg-gray-100 rounded-2xl px-5 py-4 font-bold text-gray-700 text-lg">

                <h1>Item</h1>

                <h1 className="text-center">
                    Quantity
                </h1>

                <h1 className="text-right">
                    Price
                </h1>

            </div>


            {/* Items */}

            <div className="mt-5 flex flex-col">

                {
                    item.items?.map((pizza, index) => (

                        <div
                            key={index}
                            className="border-b border-gray-200 py-6"
                        >

                            {/* Desktop */}

                            <div className="hidden lg:grid grid-cols-[2fr_1fr_1fr] items-center">

                                {/* Left */}

                                <div className="flex items-center gap-5">

                                    <div className="bg-orange-50 p-3 rounded-2xl">

                                        <img
                                            src={pizza.img}
                                            alt={pizza.name}
                                            className="w-20 h-20 object-contain"
                                        />

                                    </div>
                                    <div>
                                        <h1 className="font-bold text-2xl text-gray-800">
                                            {pizza.name}
                                        </h1>

                                        <p className="text-gray-500 mt-1">
                                            Delicious Pizza
                                        </p>

                                    </div>

                                </div>


                                {/* Quantity */}

                                <div className="flex justify-center">

                                    <div className="bg-gray-100 px-5 py-2 rounded-xl font-bold text-lg">

                                        {pizza.quantity}

                                    </div>

                                </div>


                                {/* Price */}

                                <div className="flex justify-end">

                                    <h1 className="text-2xl font-bold text-gray-800">

                                        ₹{pizza.price * pizza.quantity}

                                    </h1>

                                </div>

                            </div>


                            {/* Mobile + Tablet */}

                            <div className="flex flex-col gap-5 lg:hidden">

                                <div className="flex items-center gap-4">

                                    <div className="bg-orange-50 p-2 rounded-2xl">

                                        <img
                                            src={pizza.img}
                                            alt={pizza.name}
                                            className="w-16 h-16 object-contain"
                                        />

                                    </div>

                                    <div>

                                        <h1 className="font-bold text-lg md:text-xl text-gray-800">
                                            {pizza.name}
                                        </h1>

                                        <p className="text-gray-500 text-sm">
                                            Delicious Pizza
                                        </p>

                                    </div>

                                </div>


                                <div className="flex justify-between items-center">

                                    <div className="flex items-center gap-2">

                                        <span className="text-gray-500 font-semibold">
                                            Qty:
                                        </span>

                                        <div className="bg-gray-100 px-4 py-2 rounded-xl font-bold">

                                            {pizza.quantity}

                                        </div>

                                    </div>

                                    <h1 className="text-xl md:text-2xl font-bold text-gray-800">

                                        ₹{pizza.price * pizza.quantity}

                                    </h1>

                                </div>

                            </div>

                        </div>

                    ))
                }

            </div>


            {/* Totals */}

            <div className="mt-10 bg-gray-50 rounded-2xl p-4 md:p-6 flex flex-col gap-5">

                <div className="flex justify-between text-base md:text-lg">

                    <h1 className="text-gray-600">
                        Subtotal
                    </h1>

                    <h1 className="font-semibold">
                        ₹{item.totalAmount}
                    </h1>

                </div>

                <div className="flex justify-between text-base md:text-lg">

                    <h1 className="text-gray-600">
                        Delivery Charges
                    </h1>

                    <h1 className="font-semibold">
                        ₹40
                    </h1>

                </div>

                <div className="flex justify-between text-base md:text-lg">

                    <h1 className="text-gray-600">
                        Tax (5%)
                    </h1>

                    <h1 className="font-semibold">

                        ₹{Math.floor(item.totalAmount * 0.05)}

                    </h1>

                </div>

                <div className="border-t pt-5 flex justify-between items-center">

                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Total Amount
                    </h1>

                    <h1 className="text-3xl md:text-4xl font-bold text-green-700">

                        ₹{
                            item.totalAmount +
                            40 +
                            Math.floor(item.totalAmount * 0.05)
                        }

                    </h1>

                </div>

            </div>

        </div>

    )

}

export default Orderitems