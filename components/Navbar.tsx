import Link from "next/link";
import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";

const Header = () => {
  return (
    <div>
      {/* Top Banner */}
<div className="bg-[#7E33E0] text-white text-sm flex justify-center gap-[600px] items-center py-2 px-5">
  {/* Left Section */}
  <div className="flex items-center gap-4">
    {/* Email */}
    <span>
      <a href="mailto:mk7275374@gmail.com" className="hover:text-gray-300">
        mk7275374@gmail.com
      </a>
    </span>
    {/* Phone */}
    <span className="flex items-center gap-1">
      <i className="fas fa-phone"></i> {/* Phone Icon */}
      <a href="tel:+1234567890" className="hover:text-gray-300">
        +123 456 7890
      </a>
    </span>
  </div>

  {/* Right Section */}
  <div className="flex items-center gap-6">
    {/* Dropdowns */}
    <div>
      <select
        className="bg-transparent text-white cursor-pointer"
        defaultValue="English"
      >
        <option value="English">English</option>
        <option value="French">French</option>
      </select>
    </div>
    <div>
      <select
        className="bg-transparent text-white cursor-pointer"
        defaultValue="RUPEES"
      >
        <option value="USD">RUPEES</option>
        <option value="RUPEES">USD</option>
      </select>
    </div>

    {/* LOGIN + ICON */}
    <Link href="/"
    className="flex gap-1">Login <RxPerson />
    </Link>
    {/* Placeholder for Navigation or Icons */}
    <div className="flex gap-4">
          <button className="hover:text-red-600">
          <CiHeart className="w-[16px] h-[16px]"/>
          </button>
          <button className="hover:text-gray-700 text-5xl">
            <RiShoppingCart2Line className="w-[24px] h-[24px]" />
          </button>
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
              <Link href="/" className="hover:text-gray-700">
              <select
        className="bg-transparent text-black cursor-pointer"
        defaultValue="Home"
      >
        <option value="Home">Home</option>
      </select>
              </Link>
            </li>
            <li>
              <Link href="/pages" className="hover:text-gray-700">
                Pages
              </Link>
            </li>
            <li>
              <Link href="/pages" className="hover:text-gray-700">
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
        <div className="relative flex-1 mx-5 max-w-md md:max-w-lg lg:max-xl">
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
