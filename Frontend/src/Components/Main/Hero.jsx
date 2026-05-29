import { useNavigate } from 'react-router-dom'

const Hero = () => {

    const navigate = useNavigate()

    const func = () => {
        navigate("/Menu")
    }

    const func1 = () => {
        navigate("/Cart")
    }

    return (

        <div className='relative h-112 w-full overflow-hidden'>

            <img
                src="/assets/p2.jpg"
                alt="img1"
                className='object-cover w-full h-full'
            />

            <h1 className='z-10 absolute top-20 left-10 text-2xl font-bold text-[#E57F0A]'>
                Hot.Fresh.Delicious.
            </h1>

            <h1 className='absolute lg:top-35 top-30 left-10 lg:text-4xl text-2xl text-white font-bold'>
                Pizza Delivered <br />
                To Your <span className='text-[#E57F0A] font-bold'>Doorstep</span>
            </h1>

            <span className='absolute lg:top-60 top-50 text-white font-bold left-10 lg:text-2xl text-xl'>
                Choose from a wide range of pizzas <br />
                and get it delivered hot and fresh.
            </span>

            <div className='flex'>

                <button onClick={func1} className='bg-[#D7160A] absolute top-85 left-10 p-2 text-white rounded hover:bg-red-900 cursor-pointer hover:-translate-y-2 duration-300'>
                    Your Cart
                </button>

                <button
                    onClick={func}
                    className='absolute top-85 left-45 text-white rounded border border-white p-2 cursor-pointer hover:-translate-y-2 duration-300'>

                    View Menu

                </button>

            </div>

        </div>

    )

}

export default Hero