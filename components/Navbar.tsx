"use client"; // Add this at the top to make it a Client Component

import Link from "next/link";
import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";
import { useRouter } from "next/navigation"; // Correct import for useRouter in App Router

const Header = () => {
  const router = useRouter();

  const handleNavigation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPage = e.target.value;
    if (selectedPage) {
      router.push(selectedPage); // Navigate programmatically
    }
  };

  return (
    <div className="hidden md:block">
      {/* Top Banner */}
      <div className="bg-[#7E33E0] text-white text-sm flex justify-center gap-[600px] items-center py-2 px-5">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <span>
            <a href="mailto:mk7275374@gmail.com" className="hover:text-gray-300">
              mk7275374@gmail.com
            </a>
          </span>
          <span className="flex items-center gap-1">
            <a href="tel:+1234567890" className="hover:text-gray-300">
              +123 456 7890
            </a>
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Language Dropdown */}
          <div>
            <select className="bg-transparent text-black font-bold cursor-pointer" defaultValue="English">
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
          </div>

          {/* Currency Dropdown */}
          <div>
            <select className="bg-transparent text-black font-bold cursor-pointer" defaultValue="Rupees">
              <option value="INR">Rupees (INR)</option>
              <option value="USD">US Dollar (USD)</option>
            </select>
          </div>

          {/* Login Link */}
          <Link href="/" className="flex gap-1 font-serif">
            Login <IoMdLogIn className="mt-1" />
          </Link>

          {/* Icons */}
          <div className="flex gap-4">
            <button className="hover:text-red-600">
              <CiHeart className="w-[30px] h-[30px]" />
            </button>
            <Link href="/shop" className="text-5xl">
              <RiShoppingCart2Line className="w-[24px] h-[24px]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md px-5 py-3 flex justify-center gap-28 items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Hekto</div>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-6">
            <li>
              <select
                className="bg-transparent text-black cursor-pointer"
                defaultValue=""
                onChange={handleNavigation}
              >
                <option value="" disabled>
                  Select Page
                </option>
                <option value="/">Home</option>
                <option value="/pages">Pages</option>
              </select>
            </li>
            <li>
              <Link href="/pages" className="hover:text-gray-700">
                Pages
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-gray-700">
                Products
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-700">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-gray-700">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-700">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="relative flex-1 mx-5 max-w-md">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full border border-gray-300 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
          >
            🔍
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
