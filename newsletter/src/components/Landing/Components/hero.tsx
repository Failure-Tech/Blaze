import React from "react";
import Navbar from "./navbar.tsx"; // Adjust the path based on your project structure
import Newsletter from "../../newsletter.tsx";
import { FiArrowRight } from 'react-icons/fi';
import './hero.css';
import Faq from "./faq.tsx";

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

                <div className="mt-12 card w-full max-w-xs bg-base-300 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-white">Lorem Ipsum</h2>
                        <ul className="list-disc list-inside text-gray-300">
                            <li><span className="text-accent">Lorem ipsum</span> dolor sit</li>
                            <li><span className="text-accent">Amet</span> consectetur</li>
                            <li><span className="text-accent">Adipiscing</span> elit</li>
                            <li><span className="text-accent">Nulla</span> venenatis</li>
                            <li><span className="text-accent">Metus</span> vehicula</li>
                            <li><span className="text-accent"><strong>Efficientia</strong></span> time saved</li>
                        </ul>
                    </div>
                </div>

                {/* Adding more space between the previous section and FAQ */}
                <div className="mt-16 mb-0"> 
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