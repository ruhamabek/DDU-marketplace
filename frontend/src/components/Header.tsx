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
import { Link } from "react-router-dom";

// Header component
function Header() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <a href="#" className="flex items-center">
          <img src={logo} className="h-28 md:h-28 w-auto" alt="DirePick Logo" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-10 font-medium text-lg lg:text-xl">
          <button
            onClick={() => scrollToSection("popular")}
            className="hover:text-blue-500 transition"
          >
            Popular
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-blue-500 transition"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-blue-500 transition"
          >
            Contact Us
          </button>
        </nav>

        {/* Sign In Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            to={"/login"}
            className=" dark:bg-white px-5 md:min-w-[140px] bg-black/90 dark:text-black/90 md:py-3 py-[5px]  rounded-md font-normal text-sm md:text-base md:font-medium text-white "
          >
            sign in
          </Link>
        </div>

        {/* Mobile Navigation - Shadcn Sheet Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="text-black w-8 h-8 cursor-pointer" />
            </SheetTrigger>

            <SheetContent className="space-y-4 bg-white text-black items-center">
              <SheetTitle className="text-3xl font-bold mt-12">Menu</SheetTitle>
              <Separator />

              <SheetDescription className="flex flex-col gap-6">
                <button
                  onClick={() => scrollToSection("popular")}
                  className="text-lg font-medium hover:text-blue-500"
                >
                  Popular
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-lg font-medium hover:text-blue-500"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-lg font-medium hover:text-blue-500"
                >
                  Contact Us
                </button>

                {/* Mobile Sign In Button */}
                <button
                  onClick={() => {
                    window.location.href = "http://localhost:5173/auth/sign-in";
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Sign In
                </button>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
