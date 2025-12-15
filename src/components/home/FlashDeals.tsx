"use client";

import Image from "next/image";
import { HiOutlineHeart } from "react-icons/hi";

const flashDeals = [
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
    name: "White Chair",
    image: "/products/product-chair-white.png",
    price: "Rs. 9,999.30",
    oldPrice: "NPR 12,999",
    rating: 4.2,
  },
  {
    id: 4,
    name: "Diamond Rings",
    image: "/products/product-rings-diamond.png",
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
    name: "Beige Socks",
    image: "/products/product-socks-beige.png",
    price: "Rs. 9,999.30",
    oldPrice: "NPR 12,999",
    rating: 4.2,
  },
    {
    id: 7,
    name: "Rose Gold Earrings",
    image: "/products/product-earrings-rose-gold.png",
    price: "Rs. 9,999.30",
    oldPrice: "NPR 12,999",
    rating: 4.2,
  },
  {
    id: 8,
    name: "Silver Necklace",
    image: "/products/product-necklace-silver.png",
    price: "Rs. 9,999.30",
    oldPrice: "NPR 12,999",
    rating: 4.2,
  },
  {
    id: 9,
    name: "Wall Frame",
    image: "/products/product-frame-white.png",
    price: "Rs. 9,999.30",
    oldPrice: "NPR 12,999",
    rating: 4.2,
  },
  {
    id: 10,
    name: "Gold Hair Clips",
    image: "/products/product-hairclips-gold.png",
    price: "Rs. 9,999.30",
    oldPrice: "NPR 12,999",
    rating: 4.2,
  },
  {
    id: 11,
    name: "Peach Hair Accessories",
    image: "/products/product-hairclips-peach.png",
    price: "Rs. 9,999.30",
    oldPrice: "NPR 12,999",
    rating: 4.2,
  },
  {
    id: 12,
    name: "Earring Set",
    image: "/products/product-earrings-rose-gold.png",
    price: "Rs. 9,999.30",
    oldPrice: "NPR 12,999",
    rating: 4.2,
  },

];

export default function FlashDeals() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 mt-12">
      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Flash Deals</h2>
          <p className="text-xs text-gray-500">Upto 30% off</p>
        </div>

        <button className="text-sm font-medium text-orange-500">
          View All →
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {flashDeals.map((item) => (
          <div
            key={item.id}
            className="relative rounded-2xl bg-white p-3 shadow-sm transition hover:shadow-md"
          >
            {/* BADGES */}
            <div className="absolute left-3 top-3 z-10 flex gap-1">
              <span className="rounded bg-blue-600 px-2 py-0.5 text-xs text-white">
                New
              </span>
              <span className="rounded bg-orange-500 px-2 py-0.5 text-xs text-white">
                -40%
              </span>
            </div>

            {/* HEART */}
            <button className="absolute right-3 top-3 z-10">
              <HiOutlineHeart className="text-xl text-gray-400 hover:text-red-500" />
            </button>

            {/* IMAGE */}
            <div className="relative h-[140px] w-full rounded-xl bg-gray-100">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>

            {/* NAME */}
            <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
              {item.name}
            </h3>

            {/* PRICE */}
            <div className="mt-1 flex items-center gap-2">
              <span className="text-sm font-semibold text-blue-600">
                {item.price}
              </span>
              <span className="text-xs text-gray-400 line-through">
                {item.oldPrice}
              </span>
            </div>

            {/* RATING */}
            <div className="mt-1 text-xs text-yellow-500">
              ⭐ {item.rating}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
