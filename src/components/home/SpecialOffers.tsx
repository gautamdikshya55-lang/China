"use client";

import Image from "next/image";
import { HiOutlineHeart } from "react-icons/hi";

const specialOffers = [
  // ROW 1
  {
    id: 1,
    name: "White Bowl",
    image: "/products/bowl-white.png",
  },
  {
    id: 2,
    name: "Phone Case Marble",
    image: "/products/phonecase-marble.png",
  },
  {
    id: 3,
    name: "Backpack Leather",
    image: "/products/backpack-black-leather.png",
  },
  {
    id: 4,
    name: "Game Controller",
    image: "/products/controller-white.png",
  },
  {
    id: 5,
    name: "Wall Charger",
    image: "/products/charger-wall-white.png",
  },
  {
    id: 6,
    name: "USB Cable",
    image: "/products/charger-apple.png",
  },

  // ROW 2
  {
    id: 7,
    name: "Vintage Telephone",
    image: "/products/telephone-vintage.png",
  },
  {
    id: 8,
    name: "Black Boots",
    image: "/products/boots-black.png",
  },
  {
    id: 9,
    name: "Hanging Plant",
    image: "/products/plant-hanging-1.png",
  },
  {
    id: 10,
    name: "Plant Decor",
    image: "/products/2 plant hang.png",
  },
  {
    id: 11,
    name: "Tote Bag",
    image: "/products/bag-tote-brown.png",
  },
  {
    id: 12,
    name: "Hand Bag",
    image: "/products/bag-handbag-black.png",
  },
];

export default function SpecialOffers() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 mt-14">
      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Specials Offers{" "}
            <span className="ml-1 text-sm font-medium text-orange-500">
              (upto 40% off)
            </span>
          </h2>
        </div>

        <button className="text-sm font-medium text-orange-500">
          View All →
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {specialOffers.map((item) => (
          <div
            key={item.id}
            className="relative rounded-2xl bg-white p-3 shadow-sm hover:shadow-md transition"
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
            <div className="relative h-[140px] rounded-xl bg-gray-100">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>

            {/* TITLE */}
            <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
              Classic Old-School Black Sneakers Low top Shoes
            </h3>

            {/* PRICE */}
            <div className="mt-1 flex items-center gap-2">
              <span className="text-sm font-semibold text-blue-600">
                Rs. 9,999.30
              </span>
              <span className="text-xs text-gray-400 line-through">
                NPR 12,999
              </span>
            </div>

            {/* RATING */}
            <div className="mt-1 text-xs text-yellow-500">⭐ 4.2</div>
          </div>
        ))}
      </div>
    </section>
  );
}
