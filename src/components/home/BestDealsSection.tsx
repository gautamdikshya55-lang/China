"use client";

import Image from "next/image";
import { HiOutlineHeart } from "react-icons/hi";

const categories = [
  "Best Deals",
  "New Arrivals",
  "Sports Outdoor",
  "Fashion Clothing",
  "Electronics",
  "Furniture",
  "Baby Products",
  "Cosmetics",
  "Groceries",
];

const products = [
  {
    id: 1,
    name: "Classic Old-School Black Sneakers Low top Shoes",
    image: "/products/product-sneakers-black-side.png",
    price: "Rs. 9,999.30",
    oldPrice: "NPR 12,999",
    rating: 4.2,
  },
  {
    id: 2,
    name: "Wireless Headphone",
    image: "/products/product-headphone-2.png",
    price: "Rs. 9,999.30",
    oldPrice: "NPR 12,999",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Lipstick Beauty Product",
    image: "/products/product-lipstick.png",
    price: "Rs. 9,999.30",
    oldPrice: "NPR 12,999",
    rating: 4.2,
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    image: "/products/product-earbuds.png",
    price: "Rs. 9,999.30",
    oldPrice: "NPR 12,999",
    rating: 4.2,
  },
  {
    id: 5,
    name: "Stylish Sunglasses",
    image: "/products/product-sunglasses.png",
    price: "Rs. 9,999.30",
    oldPrice: "NPR 12,999",
    rating: 4.2,
  },
  {
    id: 6,
    name: "Electric Kettle",
    image: "/products/product-kettle.png",
    price: "Rs. 9,999.30",
    oldPrice: "NPR 12,999",
    rating: 4.2,
  },
  {
    id: 7,
    name: "Smart Watch Black",
    image: "/products/product-smartwatch-black.png",
    price: "Rs. 9,999.30",
    oldPrice: "NPR 12,999",
    rating: 4.2,
  },
  {
    id: 8,
    name: "Essential Oils",
    image: "/products/product-essential-oils.png",
    price: "Rs. 9,999.30",
    oldPrice: "NPR 12,999",
    rating: 4.2,
  },
  {
    id: 9,
    name: "Vintage Camera",
    image: "/products/product-vintage-camera.png",
    price: "Rs. 9,999.30",
    oldPrice: "NPR 12,999",
    rating: 4.2,
  },
  {
    id: 10,
    name: "Phone Case",
    image: "/products/product-phonecase.png",
    price: "Rs. 9,999.30",
    oldPrice: "NPR 12,999",
    rating: 4.2,
  },
  {
    id: 11,
    name: "Network Cables",
    image: "/products/product-network-cables.png",
    price: "Rs. 9,999.30",
    oldPrice: "NPR 12,999",
    rating: 4.2,
  },
  {
    id: 12,
    name: "Backpack Leather",
    image: "/products/backpack-black-leather.png",
    price: "Rs. 9,999.30",
    oldPrice: "NPR 12,999",
    rating: 4.2,
  },
];

export default function BestDealsSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 mt-10">
{/* CATEGORY BAR */}
<div className="flex items-center justify-between mb-6 gap-4">
  {/* Categories */}
  <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
    {categories.map((cat, i) => (
      <button
        key={cat}
        className={`whitespace-nowrap text-sm transition
          ${
            i === 0
              ? "bg-blue-600 text-white px-4 py-2 rounded-full font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }`}
      >
        {cat}
      </button>
    ))}
  </div>

  {/* View All */}
  <button className="hidden sm:block text-sm text-blue-600 font-medium whitespace-nowrap">
    View All →
  </button>
</div>


      {/* PRODUCT GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition relative"
          >
            {/* BADGES */}
            <div className="absolute top-3 left-3 flex gap-1 z-10">
              <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded">
                New
              </span>
              <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded">
                -40%
              </span>
            </div>

            {/* HEART */}
            <button className="absolute top-3 right-3 z-10">
              <HiOutlineHeart className="text-xl text-gray-400 hover:text-red-500" />
            </button>

            {/* IMAGE */}
            <div className="relative w-full h-[150px] bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-contain"
              />
            </div>

            {/* TITLE */}
            <h3 className="mt-3 text-sm font-medium line-clamp-2">
              {p.name}
            </h3>

            {/* PRICE */}
            <div className="mt-1">
              <span className="text-blue-600 font-semibold">{p.price}</span>
              <span className="text-xs text-gray-400 line-through ml-2">
                {p.oldPrice}
              </span>
            </div>

            {/* RATING */}
            <div className="mt-1 text-sm text-yellow-500">
              ⭐ {p.rating}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
