// src/components/Navbar.tsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import blazeLogo from '../../../assets/blaze.png'; // Your logo

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleLoginClick = () => {
        navigate('/login');
    };

    // Scroll event handler
    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false); // Scrolling down
            } else {
                setShowNavbar(true); // Scrolling up
            }
            setLastScrollY(window.scrollY); // Update last scroll position
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div className={`navbar bg-base-900 border-b-0 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a href="#pricing">Pricing</a></li>
                        <li>
                            <a href="#demo">Demo</a>
                            <ul className="p-2">
                                <li><a href="#faq">FAQ</a></li>
                                <li><a href="/test">Test</a></li>
                            </ul>
                        </li>
                        <li className="btn btn-active btn-primary"><a href="/login">Login</a></li>
                    </ul>
                </div>
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse btn btn-ghost text-xl">
                    <img src={blazeLogo} className="h-8" alt="Blaze Logo" />
                    <span className="self-center font-changa text-2xl font-semibold">Blaze</span>
                </a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-8">
                    <li><a href="#pricing" className="text-gray-300 hover:bg-gray-700">Pricing</a></li>
                    <li><a href="#demo" className="text-gray-300 hover:bg-gray-700">Demo</a></li>
                    <li><a href="#faq" className="text-gray-300 hover:bg-gray-700">FAQ</a></li>
                </ul>
            </div>

            <div className="navbar-end">
                <button onClick={handleLoginClick} className="btn btn-primary">
                    Login
                </button>
            </div>
        </div>
    );
}

export default Navbar;
