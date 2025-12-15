// src/components/home/LiveSellSection.tsx
"use client";

import Image from "next/image";

const liveItems = [
  {
    id: 1,
    title: "Fashion Try-On Live",
    subtitle: "Live product demo + special bundle w...",
    image: "/live/image.png",
    avatar: "/live/image.png",
  },
  {
    id: 2,
    title: "Fashion Try-On Live",
    subtitle: "Live product demo + special bundle w...",
    image: "/live/live-fashion-stream-2.png",
    avatar: "/live/image.png",
  },
  {
    id: 3,
    title: "Fashion Try-On Live",
    subtitle: "Live product demo + special bundle w...",
    image: "/live/live-tech-stream.png",
    avatar: "/live/image.png",
  },
  {
    id: 4,
    title: "Fashion Try-On Live",
    subtitle: "Live product demo + special bundle w...",
    image: "/live/live-fashion-stream-2.png",
    avatar: "/live/image.png",
  },
];

export default function LiveSellSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 mt-2">

      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Live Sell</h2>
        <button className="text-sm font-medium text-orange-500">
          View All →
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {liveItems.map((item) => (
          <div key={item.id}>
            {/* IMAGE */}
            <div className="relative h-[260px] overflow-hidden rounded-3xl">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

              {/* BADGES */}
              <div className="absolute left-3 top-3 flex gap-2 text-xs font-semibold">
                <span className="rounded-full bg-red-500 px-3 py-1 text-white">
                  🔴 Live
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-gray-800">
                  4.8K watching
                </span>
              </div>
            </div>

            {/* BOTTOM CONTENT */}
            <div className="mt-2 flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src={item.avatar}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-gray-900">
                  {item.title}
                </p>
                <p className="truncate text-xs text-gray-500">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
