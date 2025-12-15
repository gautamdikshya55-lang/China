"use client";

import Image from "next/image";

export default function SaleBannerSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 mt-12">
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] rounded-[40px] overflow-hidden">
        <Image
          src="/banners/sale-banner.png"
          alt="Mega Sale"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}
