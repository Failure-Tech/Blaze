import React from "react";
import { useNavigate } from "react-router-dom";
import blazeLogo from '../../../assets/blaze.png'; // Your logo
import { FiArrowRight } from 'react-icons/fi'; // Importing the arrow icon
import './hero.css'; // Assuming you have a CSS file for font import

const Hero: React.FC = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    }
    return (
        <div style={{ 
            background: '#FFF7EA', 
            minHeight: '100vh', 
            width: '100vw',  // Ensure full viewport width
            overflow: 'hidden',  // Prevent any accidental overflow
            padding: '0',  // Remove any default padding
            margin: '0'  // Remove any default margin
        }}>
            <nav className="bg-[#1a1a1a] border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={blazeLogo} className="h-8" alt="Blaze Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white font-changa">Blaze</span>
                    </a>
                    <div className="hidden md:flex md:space-x-8">
                        <a href="#pricing" className="py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                        <a href="#demo" className="py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Demo</a>
                        <a href="#faq" className="py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">FAQ</a>
                        <button onClick={handleLoginClick} className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition-colors">Login</button>
                    </div>
                </div>
            </nav>

            <div className="flex flex-col items-center justify-start min-h-screen pt-16">
                <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-changa">
                    Build Your Startup With Blazing Speed, <br /> <br /> from Idea to First Sale in Less Than a Week
                </h1>
                <br />
                <div className="flex items-center justify-between w-full max-w-screen-lg mt-8 px-4">
                    <button className="bg-transparent text-[#000] font-changa text-[24px] font-normal leading-normal rotate-[-4deg] flex-shrink-0" style={{ width: '173.496px', height: '37.698px' }}>
                        Review
                    </button>
                    <h3 className="text-center mx-4">
                        Components and no-code tools at your disposal to create startup fast, <br /> more tools to come to automate the entire process.
                    </h3>
                    <button className="bg-transparent text-[#000] font-changa text-[24px] font-normal leading-normal rotate-[-4deg] flex-shrink-0" style={{ width: '173.496px', height: '37.698px' }}>
                        Review
                    </button>
                </div>

                <div className="mt-12">
                    <button 
                        className="flex items-center justify-center text-white rounded-2xl px-6 py-3 hover:bg-orange-600 transition-colors" 
                        style={{ backgroundColor: '#FFA629' }}
                    >
                        Try Blaze Now
                        <FiArrowRight className="ml-2" />
                    </button>
                </div>

                <div className="mt-12 w-full max-w-xs bg-[#FFE9C4] p-6 rounded-lg shadow-md">
                    <ul className="list-disc list-inside space-y-4">
                        <li className="text-black"><span className="text-red-600">3+ hours</span> to brainstorm</li>
                        <li className="text-black"><span className="text-red-600">10+ hours</span> to design</li>
                        <li className="text-black"><span className="text-red-600">10+ hours</span> to code</li>
                        <li className="text-black"><span className="text-red-600">5+ hours</span> of testing</li>
                        <li className="text-black"><span className="text-red-600">2+ hours</span> to configure and deploy</li>
                        <li className="text-black custom-equal-sign"><span className="text-red-600">30+ hours</span> of inefficiency</li>
                    </ul>
                </div>

                {/* New section for 'What do we do' */}
                <div className="w-full bg-[rgba(90,38,0,0.84)] py-8" style={{ width: '100vw' }}> {/* Set width to 100vw */}
                    <div className="text-center">
                        <h1 className="text-[#FFE9C8] font-changa text-4xl">
                            What do we do
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
