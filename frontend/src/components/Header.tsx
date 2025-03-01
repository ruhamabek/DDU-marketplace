import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="relative bg-[#38474E] overflow-hidden">
      {/* Diagonal White Stripe - Covers Header and Spills Into Hero */}
      <div
        className="absolute top-0 left-0 w-full h-[300px] pointer-events-none z-0"
        style={{
          backgroundColor: "white",
          transform: "rotate(-6deg) translateY(-50%)",
        }}
      ></div>

      {/* Actual Header Content */}
      <div className="relative flex flex-row gap-16 lg:gap-35 font-bold z-10">
        <Link to="/">
          <img
            src={logo}
            className="w-25 h-25 lg:w-35 lg:h-35 object-contain"
            alt="Logo"
          />
        </Link>
        <div className="mt-12 md:ml-25 lg:ml-100  hover:text-blue-700 hover:cursor-pointer">
          POPULAR
        </div>
        <div className="mt-12 hover:text-blue-700 hover:cursor-pointer">
          ABOUT US
        </div>
        <div className="mt-12 hover:text-blue-700 hover:cursor-pointer">
          CONTACT US
        </div>
      </div>
    </div>
  );
}

export default Header;
