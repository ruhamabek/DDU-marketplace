import { Separator } from "@/components/ui/separator";
import iphone from "../assets/Apple-iPhone-16-Pro-Photoroom.png";
import vivo from "../assets/Samsung-glaxy-phone-Photoroom.png";
import asus from "../assets/asus-rog-zyphyrus-Photoroom.png";
import vivo1 from "../assets/vivo-mobile-phone-Photoroom.png";
import { useEffect, useState } from "react";
import { Instagram, Twitter, Send } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  id: string;
  children: ReactNode;
  className: string;
};

// Reusable section with fade-in animation on scroll
const Section = ({ id, children, className = "" }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    const section = document.getElementById(id);
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [id]);

  return (
    <section
      id={id}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      } ${className}`}
    >
      {children}
    </section>
  );
};

const HomePage = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-16 ">
      {/* Popular Products Section */}
      <Section id="popular" className="py-16 text-center mb-30">
        <h2 className="text-4xl font-bold mb-8 text-white">Popular Products</h2>
        <div className="flex flex-row gap-12 justify-center">
          <div className="p-6 flex justify-center items-center">
            <img src={iphone} className="max-w-[400px] h-auto" alt="iPhone" />
          </div>
          <div className="p-6 flex justify-center items-center">
            <img src={vivo} className="max-w-[400px] h-auto" alt="Samsung" />
          </div>
          <div className="p-6 flex justify-center items-center">
            <img src={asus} className="max-w-[400px] h-auto" alt="Laptop" />
          </div>
        </div>
      </Section>

      {/* About Us Section */}
      <Section id="about" className="py-19">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <img
              src={vivo1}
              alt="About Us Image"
              className="w-full object-cover"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full md:w-1/2 space-y-6 text-white">
            <h2 className="text-3xl font-bold border-b-2 border-gray-500 pb-2 inline-block">
              ABOUT <span className="text-white font-semibold">US</span>
            </h2>
            <p className="text-lg leading-relaxed">
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>
            <p className="text-lg leading-relaxed">
              Since our inception, we’ve worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>

            <div>
              <h3 className="text-2xl font-semibold mt-4">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                Our mission at Forever is to empower customers with choice,
                convenience, and confidence. We’re dedicated to providing a
                seamless shopping experience that exceeds expectations, from
                browsing and ordering to delivery and beyond.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Us Section */}
      <Section id="contact" className="mt-60">
        <Separator />
        <footer className="py-8">
          <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            {/* Left Section - Branding & Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-wider">
                DirePick<span className="text-white">.</span>
              </h2>
              <p className="text-sm leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>

            {/* Middle Section - Links */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">COMPANY</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:underline"
                    onClick={() => scrollToSection("popular")}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline"
                    onClick={() => scrollToSection("about")}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Section - Contact Info */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">GET IN TOUCH</h3>
              <p className="text-sm">+251-947-169-355</p>
              <p className="text-sm">contact@DirePick.com</p>
              <div className="flex space-x-4 mt-4 ">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-white"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-white"
                >
                  <Send size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-white"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Section */}
          <div className="text-center text-xs text-white mt-6 border-t pt-4">
            Copyright © {new Date().getFullYear()} DirePick.com - All Rights
            Reserved.
          </div>
        </footer>
      </Section>
    </div>
  );
};

export default HomePage;
