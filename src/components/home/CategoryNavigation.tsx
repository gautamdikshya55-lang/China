"use client";

import { HiOutlineMenu } from "react-icons/hi";

export default function CategoryNavigation() {
  const categories = [
    "Phone Cases",
    "Cooking & Utensils",
    "Electronics",
    "Watches",
    "Room Accessories",
    "Washing Machines",
    "Men's Clothing",
    "Women's Clothing",
  ];

  return (
    <div className="w-full bg-[#5a54e3] text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide">

        {/* All Categories (left) */}
        <button className="flex items-center gap-2 font-semibold">
          <HiOutlineMenu className="text-xl" />
          All Categories
        </button>

        {/* Vertical Divider */}
        <div className="w-px h-5 bg-white/40"></div>

        {/* List of categories */}
        <div className="flex items-center gap-6 text-sm">
          {categories.map((cat, index) => (
            <div key={index} className="flex items-center gap-6">
              <button className="hover:text-gray-200 transition">
                {cat}
              </button>

              {/* Divider except last */}
              {index < categories.length - 1 && (
                <div className="w-px h-5 bg-white/30"></div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
