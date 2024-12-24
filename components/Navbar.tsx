"use client"; // Add this at the top to make it a Client Component

import Link from "next/link";
import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import { useRouter } from "next/navigation"; // Correct import for useRouter in App Router
import { FiPhoneCall } from "react-icons/fi";

const Header = () => {
  const router = useRouter();

  const handleNavigation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPage = e.target.value;
    if (selectedPage) {
      router.push(selectedPage); // Navigate programmatically
    }
  };

  return (
    <div>
      {/* Top Banner */}
      <div className="bg-[#7E33E0] text-white text-sm md:text-xl flex flex-col md:flex-row md:justify-center gap-4 md:gap-[400px] py-2 px-5">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <a href="mailto:mk7275374@gmail.com" className="hover:text-gray-300 flex gap-1">
            <CiMail className="mt-1" /> <span>mk7275374@gmail.com</span>
          </a>
          <a href="tel:+1234567890" className="hover:text-gray-300 flex gap-1">
            <FiPhoneCall className="mt-1" /> <span>+92 3313007384</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          {/* Language Dropdown */}
          <select
            className="bg-transparent text-white cursor-pointer focus:outline-none"
            defaultValue="Rupees"
          >
            <option value="English" className="bg-pink-500 text-black">
              English
            </option>
            <option value="Urdu" className="bg-pink-500 text-black">
              Urdu
            </option>
            <option value="Fransic" className="bg-pink-500 text-black">
              Fransic
            </option>
            <option value="Arabic" className="bg-pink-500 text-black">
              Arabic
            </option>
            <option value="Hindi" className="bg-pink-500 text-black">
              Hindi
            </option>
            <option value="Spanish" className="bg-pink-500 text-black">
              Spanish
            </option>
          </select>

          {/* Currency Dropdown */}
          <select
            className="bg-transparent text-white cursor-pointer focus:outline-none"
            defaultValue="Rupees"
          >
            <option value="INR" className="bg-pink-500 text-black">
              Rupees (PKR)
            </option>
            <option value="PKR" className="bg-pink-500 text-black">
              RUPEES (INR)
            </option>
            <option value="USD" className="bg-pink-500 text-black">
              US Dollar (USD)
            </option>
            <option value="SAR" className="bg-pink-500 text-black">
              Saudi Riyal (SAR)
            </option>
            <option value="EUR" className="bg-pink-500 text-black">
              Euro (EUR)
            </option>
            <option value="USD" className="bg-pink-500 text-black">
              US Dollar (USD)
            </option>
          </select>

          {/* Login Link */}
          <Link href="/" className="flex gap-1 font-serif">
            Login <IoMdLogIn className="mt-1" />
          </Link>

          {/* Icons */}
          <div className="flex gap-4 md:gap-10">
            <button className="hover:text-red-600 flex">
              Wishlist <CiHeart className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
            </button>
            <Link href="/shop" className="text-5xl">
              <RiShoppingCart2Line className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md px-3 md:px-5 py-3 flex flex-wrap md:flex-nowrap justify-between md:justify-center gap-4 md:gap-28 text-base md:text-2xl items-center">
        {/* Logo */}
        <div className="text-xl md:text-4xl font-bold text-gray-800">Hekto</div>

        {/* Navigation */}
        <nav className="flex-1 md:flex-none">
          <ul className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6 justify-center">
            <li>
              <select
                className="bg-transparent text-pink-600 cursor-pointer"
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
              <Link href="/shops" className="hover:text-gray-700">
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
        <div className="relative flex-1 max-w-full md:mx-5 md:max-w-md">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full border border-gray-300 px-2 py-1 md:px-4 md:py-2 outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
