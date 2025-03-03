import iphone from "../assets/Apple-iPhone-16-Pro-Photoroom.png";
import vivo from "../assets/Samsung-glaxy-phone-Photoroom.png";
import asus from "../assets/asus-rog-zyphyrus-Photoroom.png";
import vivo1 from "../assets/vivo-mobile-phone-Photoroom.png";
import { useEffect, useState } from "react";

// Reusable section with fade-in animation on scroll
const Section = ({ id, children, className = "" }) => {
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
  return (
    <div className="space-y-16 ">
      {/* Popular Products Section */}
      <Section id="popular" className="py-16 text-center">
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
      <Section id="about" className="py-16 ">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <img
              src={vivo1}
              alt="About Us Image"
              className="w-full object-cover "
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
      <Section id="contact" className="py-16">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6 border border-gray-200">
          <h2 className="text-4xl font-bold text-center">Contact Us</h2>
          <p className="text-lg text-center text-gray-700">
            Have questions? Reach out at{" "}
            <a
              href="mailto:support@direpick.com"
              className="text-blue-500 font-medium"
            >
              support@direpick.com
            </a>
          </p>
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
