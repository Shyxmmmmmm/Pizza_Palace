const Contactfooter=()=>{
    return(
        <div className="shadow-2xl  mt-5  mx-10 bg-white flex gap-2 justify-between lg:p-10  lg:pr-40 p-2 p-4">
                <div className="lg:pl-10 pl-2">
                    <h1 className="font-bold lg:text-2xl text-[#373636]">The Pizza Palace</h1>
                    <p className="mt-3 text-gray-600 lg:text-base text-xs">Our job is to fill your tummy with <br />Delicious Food</p>
                </div>
                <div>
                    <h1 className="font-semibold lg:text-2xl mb-5 text-[#373636]">About</h1>
                    <ul className="flex flex-col gap-5 lg:text-base text-xs text-gray-600">
                        <li className="hover:text-black cursor-pointer">AboutUs</li>
                        <li className="hover:text-black cursor-pointer">Features</li>
                        <li className="hover:text-black cursor-pointer">News</li>
                        <li className="hover:text-black cursor-pointer">Menu</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-semibold lg:text-2xl mb-5 text-[#373636]">Company</h1>
                    <ul className="flex flex-col gap-5 lg:text-base text-xs text-gray-600 ">
                        <li className="hover:text-black cursor-pointer">My Food In</li>
                        <li className="hover:text-black cursor-pointer">Partner</li>
                        <li className="hover:text-black cursor-pointer">FAQ</li>
                        <li className="hover:text-black cursor-pointer">Blog</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-semibold lg:text-2xl mb-5 text-[#373636]">Support</h1>
                    <ul className="flex flex-col gap-5 lg:text-base text-xs text-gray-600">
                        <li className="hover:text-black cursor-pointer">Account</li>
                        <li className="hover:text-black cursor-pointer">Support Center</li>
                        <li className="hover:text-black cursor-pointer">Feedback</li>
                        <li className="hover:text-black cursor-pointer">Contact Us</li>
                        <li className="hover:text-black cursor-pointer">Accessibility</li>
                    </ul>
                </div>
            </div>
    )
}
export default Contactfooter