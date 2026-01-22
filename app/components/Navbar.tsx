"use client";

import { useState, useEffect } from "react";

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
        <nav className="w-full flex justify-center pt-[41px] pb-0 relative z-50 shrink-0" data-node-id="3:13">
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-12 items-center font-bold text-2xl text-black">
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

            {/* Mobile Menu Button */}
            <button
                className="md:hidden fixed top-4 left-4 z-50 p-2"
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

