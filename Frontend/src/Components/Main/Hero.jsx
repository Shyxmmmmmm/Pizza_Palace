import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const func = () => {
    navigate("/Menu");
  };

  const func1 = () => {
    navigate("/Cart");
  };

  return (
    <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden">

      {/* Background Image */}
      <img
        src="/assets/p2.jpg"
        alt="pizza"
        className="w-full h-full object-cover object-center"
      />

      {/* Top Text */}
      <h1 className="absolute top-12 md:top-20 left-5 md:left-10 text-xl md:text-2xl font-bold text-[#E57F0A]">
        Hot.Fresh.Delicious.
      </h1>

      {/* Main Heading */}
      <h1 className="absolute top-24 md:top-35 left-5 md:left-10 text-3xl md:text-4xl text-white font-bold leading-tight">
        Pizza Delivered <br />
        To Your <span className="text-[#E57F0A]">Doorstep</span>
      </h1>

      {/* Description */}
      <p className="absolute top-48 md:top-60 left-5 md:left-10 text-base md:text-2xl text-white font-semibold leading-relaxed">
        Choose from a wide range of pizzas
        <br />
        and get it delivered hot and fresh.
      </p>

      {/* Buttons */}
      <div className="absolute top-80 md:top-85 left-5 md:left-10 flex gap-4 flex-wrap">

        <button
          onClick={func1}
          className="bg-[#D7160A] px-4 py-2 text-white rounded hover:bg-red-900 hover:-translate-y-1 duration-300 cursor-pointer"
        >
          Your Cart
        </button>

        <button
          onClick={func}
          className="border border-white px-4 py-2 text-white rounded hover:-translate-y-1 duration-300 cursor-pointer"
        >
          View Menu
        </button>

      </div>

    </div>
  );
};

export default Hero;