"use client";
import Link from 'next/link';
import { useState } from 'react';

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#7E33E0] text-white md:hidden"> {/* Hidden on md+ screens */}
      <div className="flex items-center justify-between p-4">
        <div className="text-xl font-bold">
          <Link href="/">Foodi</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute top-16 left-0 w-full bg-gray-800 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <Link href="/" className="block px-4 py-2">
            Home
          </Link>
          <Link href="/contact" className="block px-4 py-2">
            Contact
          </Link>
          <Link href="/shop" className="block px-4 py-2">
            Shop
          </Link>
          <Link href="/blog" className="block px-4 py-2">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default MobileHeader;
