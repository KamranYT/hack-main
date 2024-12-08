"use client";

import { HiOutlineUserGroup, HiOutlineShoppingCart, HiOutlineGlobeAlt, HiOutlineLightBulb } from "react-icons/hi"; 
import React from "react";
import Image from "next/image";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsShieldFillCheck } from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";
import { AiTwotoneShop } from "react-icons/ai";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";

const About: React.FC = () => {
  return (
    <main className="overflow-hidden">
      {/* About Container */}
      <div className="about-container px-8 py-12 max-w-6xl mx-auto">
        {/* Who We Are Section */}
        <section className="mb-10 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-3xl mb-4 text-black font-bold">Our Story</h2>
            <p className="text-gray-700 leading-7">
              Launched in 2015, Exclusive is South Asia’s premier online shopping
              marketplace with an active presence in Bangladesh. Supported by a
              wide range of tailored marketing, data, and service solutions,
              Exclusive has 10,500 sellers and 300 brands and serves 3 million
              customers across the region.
            </p>
            <br />
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast rate. Exclusive offers a diverse assortment in
              categories ranging from consumer.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/about.png"
              alt="Who We Are"
              width={705}
              height={609}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </section>

       
        {/* 4-Column Grid Section with Icons */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {/* Grid Item 1 */}
          <div className="w-[270px] h-[230px] mx-auto flex flex-col items-center justify-center hover:text-white hover:bg-red-600 bg-white hover:text-white shadow-md rounded-lg p-4">
            <AiTwotoneShop size={60} className="text-red-500 hover:text-white  mb-4" />
            <p className="text-lg font-bold text-gray-700">10.5k</p>
            <br />
            <h2>Sallers active our site</h2>
          </div>

          {/* Grid Item 2 */}
          <div className="w-[270px] h-[230px] mx-auto flex flex-col items-center justify-center hover:bg-red-600 bg-white shadow-md rounded-lg p-4">
            <HiOutlineCurrencyDollar  size={60} className="mb-4" />
            <p className="text-lg font-semibold text-gray-700">33k</p>
            <h2>Monthly Products Sale</h2>
          </div>

          {/* Grid Item 3 */}
          <div className="w-[270px] h-[230px] mx-auto flex flex-col items-center justify-center hover:bg-red-600 bg-white shadow-md rounded-lg p-4">
            <HiOutlineGlobeAlt size={60} className="text-green-500 mb-4" />
            <p className="text-lg font-semibold text-gray-700">45.5k</p>
            <h2>Customer active in our site</h2>
          </div>

          {/* Grid Item 4 */}
          <div className="w-[270px] h-[230px] mx-auto flex flex-col items-center justify-center hover:bg-red-600 bg-white shadow-md rounded-lg p-4">
            <HiOutlineLightBulb size={60} className="text-yellow-500 mb-4" />
            <p className="text-lg font-extrabold text-gray-700">25k</p>
            <h2>Anual gross sale in our site</h2>
          </div>
        </section>
       {/* 3-Column Grid Section with Person Images */}
       <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Person 1 */}
          <div className="w-[370px] h-[564px] mx-auto bg-white shadow-lg rounded-lg flex flex-col items-start p-6">
            <Image
              src="/tom.png" // Replace with the actual image path
              alt="Person 1"
              width={370}
              height={430}
              className=" mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-1">Tom Cruise</h3>
            <p className="text-gray-600 text-sm">Founder & Chairman</p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className=" hover:text-blue-600 transition">
              <CiTwitter size={24} />
              </a>
              <a href="#" aria-label="Instagram" className=" hover:text-pink-600 transition">
                <FaInstagram size={24} />
              </a>
              <a href="#" aria-label="LinkedIn" className=" hover:text-blue-800 transition">
                <RiLinkedinFill size={24} />
              </a>
            </div>
          </div>

          {/* Person 2 */}
          <div className="w-[370px] h-[564px] mx-auto bg-white shadow-lg rounded-lg flex flex-col items-start p-6">
            <Image
              src="/emma.png
              " // Replace with the actual image path
              alt="Person 2"
              width={370}
              height={430}
              className=" mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-1">Emma Watson</h3>
            <p className="text-gray-600 text-sm">Managing Director</p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className=" hover:text-blue-600 transition">
                <CiTwitter size={24} />
              </a>
              <a href="#" aria-label="Instagram" className=" hover:text-pink-600 transition">
                <FaInstagram size={24} />
              </a>
              <a href="#" aria-label="LinkedIn" className=" hover:text-blue-800 transition">
                
                <RiLinkedinFill size={24} />
              </a>
            </div>
          </div>

          {/* Person 3 */}
          <div className="w-[370px] h-[564px] mx-auto bg-white shadow-lg rounded-lg flex flex-col items-start p-6">
            <Image
              src="/will.png" // Replace with the actual image path
              alt="Person 3"
              width={370}
              height={470}
              className=" mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-1">Will Smith</h3>
            <p className="text-gray-600 text-sm">Product Designer</p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className="hover:text-blue-600 transition">
                <CiTwitter size={24} />
              </a>
              <a href="#" aria-label="Instagram" className=" hover:text-pink-600 transition">
                <FaInstagram size={24} />
              </a>
              <a href="#" aria-label="LinkedIn" className=" hover:text-blue-800 transition">
                <RiLinkedinFill size={24} />
              </a>
            </div>
          </div>
          
        </section>
        {/* 3-Column Grid Section with Icons */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center mt-16">
          {/* Grid Item 1 */}
          <div className="w-[259px] h-[161px] mx-auto flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-4">
            <FaTruckFast size={80} className="mb-4" />
            <p className="text-lg font-bold text-black">FREE AND FAST DELIVERY</p>
            <h2 className="">Friendly delivery for off orders over $140</h2>
          </div>

          {/* Grid Item 2 */}
          <div className="w-[256px] h-[161px] mx-auto flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-4">
            <TfiHeadphoneAlt size={80} className="mb-4" />
            <p className="text-lg font-bold text-black">24/7 CUSTOMER SERVICE</p>
            <h2 className="">Friendly 24/7 customer support</h2>
          </div>

          {/* Grid Item 3 */}
          <div className="w-[262px] h-[161px] mx-auto flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-4">
            <BsShieldFillCheck  size={80} className="mb-4" />
            <p className="text-lg font-bold text-black">MONEY BACK GURANTEE</p>
            <h2>We retur money within 30 days</h2>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
