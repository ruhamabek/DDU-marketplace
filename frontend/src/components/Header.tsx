import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

// Header component
function Header() {
  return (
    <header className="relative bg-[#38474E] text-black py-6">
      {/* Diagonal Stripe Effect */}
      <div
        className="absolute top-0 left-0 w-full h-[250px] lg:h-[330px] pointer-events-none z-0"
        style={{
          backgroundColor: "white",
          transform: "rotate(-6deg) translateY(-40%)",
        }}
      ></div>

      {/* Navigation Bar */}
      <div className="relative z-10 flex items-center justify-between px-8 py-4 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-28 md:h-28 w-auto" alt="DirePick Logo" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-10 font-medium text-lg lg:text-xl">
          <Link to="/popular" className="hover:text-blue-500 transition">
            Popular
          </Link>
          <Link to="/about" className="hover:text-blue-500 transition">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-blue-500 transition">
            Contact Us
          </Link>
        </nav>

        {/* Sign In Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            to="/signin"
            className="text-black font-medium px-6 py-3 rounded-md hover:bg-blue-500 hover:text-white transition text-lg lg:text-xl"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Navigation - Shadcn Sheet Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="text-black w-8 h-8 cursor-pointer" />
            </SheetTrigger>

            <SheetContent className="space-y-4 bg-white text-black items-center">
              <SheetTitle className="text-3xl font-bold mt-12 ">
                Menu
              </SheetTitle>
              <Separator />

              <SheetDescription className="flex flex-col gap-6">
                <Link
                  to="/popular"
                  className="text-lg font-medium hover:text-blue-500"
                >
                  Popular
                </Link>
                <Link
                  to="/about"
                  className="text-lg font-medium hover:text-blue-500"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="text-lg font-medium hover:text-blue-500"
                >
                  Contact Us
                </Link>
                <Link
                  to="/signin"
                  className="mt-4 text-white bg-blue-500 font-medium text-lg text-center py-2 rounded-md hover:bg-blue-600 px-48"
                >
                  Sign In
                </Link>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
