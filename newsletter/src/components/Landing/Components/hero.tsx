import React from "react";
import Navbar from "./navbar.tsx"; // Adjust the path based on your project structure
import Newsletter from "../../newsletter.tsx";
import { FiArrowRight } from 'react-icons/fi';
import './hero.css';
import Faq from "./faq.tsx";
import Stripecard from "./stripecard.tsx";

const Hero: React.FC = () => {
    return (
        <div data-theme="dark" className="bg-base-900 text-white min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <div className="flex flex-col items-center justify-start min-h-screen pt-28">
                <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit
                </h1>

                <div className="flex items-center justify-center w-full max-w-screen-lg mt-8 px-4">
                    <h3 className="text-center text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nulla et metus vehicula, tempus sapien nec, venenatis dui.
                    </h3>
                </div>

                <div className="mt-12">
                    <button className="btn btn-warning btn-lg flex items-center justify-center px-8 py-4 rounded-full">
                        Lorem Ipsum Now
                        <FiArrowRight className="ml-2" />
                    </button>
                </div>

                <div className="mt-8">
                    <Stripecard />
                </div>

                {/* Adding more space between the previous section and FAQ */}
                <div className="mt-8"> 
                    <Faq />
                </div>

                {/* Removing the space between FAQ and Newsletter */}
                <div className="mt-0">
                    <Newsletter />
                </div>
            </div>
        </div>
    );
}

export default Hero;