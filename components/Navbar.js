
"use client"

import React, { useState } from "react"
import Link from "next/link"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="min-h-16 bg-black text-white px-4 sm:px-6 flex flex-wrap items-center justify-between">

            {/* Logo */}
            <div className="font-bold text-white text-2xl">
                <Link href="/shorten">
                    Linkly
                </Link>
            </div>

            {/* Hamburger button - mobile only */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-white text-2xl p-2"
                aria-label="Toggle menu"
            >
                ☰
            </button>

            {/* Navigation */}
            <ul
                className={`
                    ${menuOpen ? "flex" : "hidden"}
                    md:flex
                    w-full md:w-auto
                    flex-col md:flex-row
                    justify-center items-center
                    gap-4 md:gap-6
                    py-4 md:py-0
                `}
            >

                <li>
                    <Link
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-gray-300"
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        href="/about"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-gray-300"
                    >
                        About
                    </Link>
                </li>

                <li>
                    <Link
                        href="/shorten"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-gray-300"
                    >
                        Shorten
                    </Link>
                </li>

                <li>
                    <Link
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-gray-300"
                    >
                        Contact us
                    </Link>
                </li>

                <li>
                    <Link
                        href="/shorten"
                        onClick={() => setMenuOpen(false)}
                    >
                        <button className="bg-gray-900 hover:bg-gray-800 rounded-lg shadow-lg px-5 py-2 font-bold">
                            Try Now
                        </button>
                    </Link>
                </li>

            </ul>

        </nav>
    )
}

export default Navbar