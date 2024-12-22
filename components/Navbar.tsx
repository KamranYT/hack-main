"use client"; // Add this at the top to make it a Client Component

import Link from "next/link";
import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

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
      <div className="bg-[#7E33E0] text-white text-xl flex justify-center gap-[400px] py-2 px-5">
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
          <select
    className="bg-transparent text-white  cursor-pointer focus:outline-none"
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

          </div>

          {/* Currency Dropdown */}
          <div>
  <select
    className="bg-transparent text-white  cursor-pointer focus:outline-none"
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

  <style jsx>
    {`
      select option {
        background-color: #7E33E0; /* Tailwind's bg-pink-500 */
        color: #000; /* Black text color */
      }

      select:focus {
        outline: none;
      }
    `}
  </style>
</div>


          {/* Login Link */}
          <Link href="/" className="flex gap-1 font-serif">
            Login <IoMdLogIn className="mt-1" />
          </Link>

          {/* Icons */}
          <div className="flex gap-10">
            <button className="hover:text-red-600 flex">
              
              Wishlist <CiHeart className="w-[30px] h-[30px]" />
            </button>
            <Link href="/shop" className="text-5xl">
              <RiShoppingCart2Line className="w-[24px] h-[24px]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md px-5 py-3 flex justify-center gap-28 text-2xl items-center">
        {/* Logo */}
        <div className="text-4xl font-bold text-gray-800">Hekto</div>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-6">
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
                Shops
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
            className="w-full border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 bg-pink-600 transform -translate-y-1/2 text-white hover:text-black"
          >
            <FaSearch />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
