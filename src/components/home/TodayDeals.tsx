"use client";

import Image from "next/image";
import { HiOutlineHeart } from "react-icons/hi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const todayDeals = [
  {
    id: 1,
    name: "Nike Mixed Color Shoe",
    image: "/products/todaydeal-shoe.png",
    price: "NPR 9,999",
    oldPrice: "NPR 12,999",
    rating: 4.2,
  },
  {
    id: 2,
    name: "Korean Skin Care Products (Cream & Facewash)",
    image: "/products/product-essential-oils.png",
    price: "NPR 8,888",
    oldPrice: "NPR 12,999",
    rating: 3.5,
  },
  {
    id: 3,
    name: "SkullCrusher Headphone with Noise-Cancellation",
    image: "/products/todaydeal-headphone.png",
    price: "NPR 12,950",
    oldPrice: "NPR 12,999",
    rating: 4.9,
  },
];

const skinCare = [
  "/products/skincare/skincare-1.png",
  "/products/skincare/skincare-2.png",
  "/products/skincare/skincare-3.png",
  "/products/skincare/skincare-4.png",
];

export default function TodayDeals() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 mt-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">


        {/* LEFT – TODAY DEAL */}
        <div className="col-span-1 bg-white rounded-2xl p-4 lg:col-span-8 lg:p-6">

          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold">Today’s Deal</h2>
            <div className="flex gap-2">
              <button className="p-2 rounded-full bg-gray-100">
                <IoIosArrowBack size={16} />
              </button>
              <button className="p-2 rounded-full bg-gray-100">
                <IoIosArrowForward size={16} />
              </button>
            </div>
          </div>

         <div className="flex gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible">

            {todayDeals.map((p) => (
             <div
  key={p.id}
  className="min-w-[160px] border rounded-xl p-4 hover:shadow-md transition lg:min-w-0"
>

                <div className="relative h-[180px] bg-gray-100 rounded-lg overflow-hidden">
                  <Image src={p.image} alt={p.name} fill className="object-contain" />
                </div>

                <div className="flex gap-2 mt-3">
                  <span className="px-2 py-0.5 text-xs bg-blue-600 text-white rounded">
                    New
                  </span>
                  <span className="px-2 py-0.5 text-xs bg-orange-500 text-white rounded">
                    -40%
                  </span>
                </div>

                <h3 className="mt-3 text-sm font-medium line-clamp-2">
                  {p.name}
                </h3>

                <div className="mt-1">
                  <span className="text-blue-600 font-semibold">{p.price}</span>
                  <span className="ml-2 text-sm text-gray-400 line-through">
                    {p.oldPrice}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-sm">⭐ {p.rating}</span>
                  <HiOutlineHeart className="text-xl text-gray-400 hover:text-red-500 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT – SAME HEIGHT COLUMN */}
        <div className="col-span-1 bg-white rounded-2xl p-4 flex flex-col gap-6 lg:col-span-4 lg:p-6">


          {/* Skin Care Products */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-sm">Skin Care Products</h3>
              <div className="flex gap-1">
                <button className="p-1.5 rounded-full bg-gray-100">
                  <IoIosArrowBack size={12} />
                </button>
                <button className="p-1.5 rounded-full bg-gray-100">
                  <IoIosArrowForward size={12} />
                </button>
              </div>
            </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

              {skinCare.map((img, i) => (
                <div
                  key={i}
                  className="bg-[#F8F8F8] rounded-xl p-3 flex flex-col items-center"
                >
                  <div className="relative h-[90px] w-[90px]">
                    <Image src={img} alt="" fill className="object-contain" />
                  </div>
                  <span className="mt-2 px-3 py-1 text-xs bg-blue-600 text-white rounded-full">
                    NPR 5,999
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Shoes + Beds */}
         <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">

            <div className="bg-[#F8F8F8] rounded-2xl p-4 text-center">
              <h3 className="font-semibold text-sm mb-2">Shoes</h3>
              <Image src="/products/shoes/shoe-1.png" alt="" width={120} height={120} />
              <span className="mt-2 inline-block px-4 py-1 text-xs bg-blue-600 text-white rounded-full">
                NPR 5,999
              </span>
            </div>

            <div className="bg-[#F8F8F8] rounded-2xl p-4 text-center">
              <h3 className="font-semibold text-sm mb-2">Beds</h3>
              <Image src="/products/beds/bed-1.png" alt="" width={140} height={90} />
              <span className="mt-2 inline-block px-4 py-1 text-xs bg-blue-600 text-white rounded-full">
                NPR 59,999
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
