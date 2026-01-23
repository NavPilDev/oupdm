"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    return (
        <nav className="w-full flex justify-between items-center px-4 sm:px-18 md:px-[110px] pt-[20px] pb-3 sticky top-0 z-50 shrink-0 bg-[#ffffff]" data-node-id="3:13">
            {/* Desktop Navigation */}
            <div className="hidden md:flex sm:flex justify-center">
                <Image src="/assets/ocn.png" alt="Ouarin Logo" width={100} height={100} quality={100} className="w-auto h-[50px]" />
            </div>
            <div className="hidden lg:flex gap-12 items-center font-bold text-1xl text-black">
                <a href="/home" className="h-[46px] w-[78px] flex items-center justify-center hover:opacity-70 transition-opacity" data-node-id="3:2">
                    Home
                </a>
                <a href="/about" className="h-[46px] w-[78px] flex items-center justify-center hover:opacity-70 transition-opacity" data-node-id="3:9">
                    About
                </a>
                <a href="/solution" className="h-[46px] w-[125px] flex items-center justify-center hover:opacity-70 transition-opacity" data-node-id="3:11">
                    Solution
                </a>
                <a href="/team" className="h-[46px] w-[78px] flex items-center justify-center hover:opacity-70 transition-opacity" data-node-id="3:14">
                    Team
                </a>
            </div>

            <button className="bg-[#5b9acd] px-4 py-4 rounded-full text-white font-bold text-sm hidden md:flex sm:flex">
                Contact Us
            </button>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-white rounded-2xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                    <span
                        className={`block h-0.5 w-6 bg-black transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-black transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-black transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    />
                </div>

            </button>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white transition-transform duration-300 z-40 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    <Image src="/assets/ocn.png" alt="Ouarin Logo" width={100} height={100} quality={100} className="w-auto h-[50px]" />
                    <a
                        href="/home"
                        className="font-bold text-2xl text-black hover:opacity-70 transition-opacity"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </a>
                    <a
                        href="/about"
                        className="font-bold text-2xl text-black hover:opacity-70 transition-opacity"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </a>
                    <a
                        href="/solution"
                        className="font-bold text-2xl text-black hover:opacity-70 transition-opacity"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Solution
                    </a>
                    <a
                        href="/team"
                        className="font-bold text-2xl text-black hover:opacity-70 transition-opacity"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Team
                    </a>
                </div>
            </div>
        </nav>
    );
}

