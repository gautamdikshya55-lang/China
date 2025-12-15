"use client";

import Image from "next/image";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { LuCamera } from "react-icons/lu";
import { HiOutlineShoppingCart, HiOutlineHeart } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";

export default function Header() {
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm py-3 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-6">

        {/* LEFT - Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/assets/logo-chinabazar.png"
            alt="Chinabazar Logo"
            width={140}
            height={45}
          />
        </div>

        {/* CENTER - Search Input */}
        <div className="flex-1 hidden lg:flex justify-center">
          <div className="flex items-center bg-white border border-[#6b4eff] rounded-full px-4 py-2 gap-2 w-[60%] shadow-sm">

            {/* Search Icon */}
            <IoSearchOutline className="text-gray-500 text-xl" />

            {/* Input */}
            <input
              type="text"
              placeholder="Search for products & more..."
              className="flex-1 outline-none text-sm"
            />

            {/* Camera Icon Button */}
            <button className="p-2 bg-[#f4f1ff] rounded-full">
              <LuCamera className="text-[#6b4eff]" />
            </button>

            {/* Search Button */}
            <button className="px-5 py-1.5 bg-[#6b4eff] hover:bg-[#5a3ee0] text-white text-sm rounded-full">
              Search
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-6">

          {/* Login / Help / Language */}
          <div className="hidden md:flex items-center gap-4 text-sm text-gray-700">
            <button className="hover:text-[#6b4eff]">Login</button>
            <button className="hover:text-[#6b4eff]">Help Center</button>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="hover:text-[#6b4eff] flex items-center"
              >
                English ▼
              </button>

              {languageOpen && (
                <div className="absolute right-0 mt-2 bg-white border shadow rounded-md p-2">
                  <button className="block px-4 py-1 hover:bg-gray-100">English</button>
                  <button className="block px-4 py-1 hover:bg-gray-100">Nepali</button>
                </div>
              )}
            </div>
          </div>

          {/* Icons: Cart & Wishlist */}
          <div className="hidden lg:flex items-center gap-4">
            <HiOutlineShoppingCart className="text-2xl text-gray-700 cursor-pointer hover:text-[#6b4eff]" />
            <HiOutlineHeart className="text-2xl text-gray-700 cursor-pointer hover:text-[#6b4eff]" />
          </div>

          {/* User */}
          <div className="hidden lg:flex items-center gap-2">
            <FaRegUser className="text-xl text-gray-700" />
            <div className="text-sm">
              <span className="block font-medium">Welcome</span>
              <span className="text-gray-500 text-xs">Sign In / Register</span>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
