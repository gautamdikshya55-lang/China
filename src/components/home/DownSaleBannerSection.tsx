"use client";

import Image from "next/image";

export default function DownSaleBannerSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT BANNER */}
        <div className="relative h-[150px] sm:h-[180px] md:h-[220px] rounded-[56px] overflow-hidden">
          <Image
            src="/banners/sale-banner.png"
            alt="Sale Banner"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* RIGHT BANNER */}
        <div className="relative h-[150px] sm:h-[180px] md:h-[220px] rounded-[56px] overflow-hidden">
          <Image
            src="/banners/sale-banner.png"
            alt="Sale Banner"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
