import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Admin = () => {

    return (

        <div className='flex min-h-screen'>
            <div className='lg:w-[15%] w-[30%] bg-black  text-white p-5 flex flex-col gap-5'>


                <div className="flex items-center justify-center gap-2">
                    <i className="fa-brands fa-pixiv fa-2xl" style={{ color: "rgb(237, 80, 6)" }}></i>
                    <h1 className="font-semibold text-xl leading-6">
                        Pizza <br />
                        <span className="text-[#ed5006]">Palace</span>
                    </h1>
                </div>
                <Link to="/admin" className='hover:text-orange-500'>
                    Dashboard
                </Link>

                <Link to="/admin/orders" className='hover:text-orange-500'>
                    Orders
                </Link>

                <Link to="/admin/addpizza" className='hover:text-orange-500'>
                    Add Pizza
                </Link>

                <Link to="/admin/editpizza" className='hover:text-orange-500'>
                    Edit Pizza
                </Link>

                <Link to="/admin/feedback" className='hover:text-orange-500'>
                    Feedback
                </Link>

            </div>
            <div className='lg:w-[85%] w-[70%]'>

                <Outlet/>

            </div>

        </div>

    )
}

export default Admin