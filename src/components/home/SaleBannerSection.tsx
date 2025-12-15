"use client";

import Image from "next/image";
import React from "react";

const SaleBannerSection: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        
        {/* LEFT BIG BANNER */}
        <div className="relative col-span-1 lg:col-span-2 h-[260px] sm:h-[320px] lg:h-[360px] rounded-3xl overflow-hidden">
          <Image
            src="/banners/banner-sneakers-sale.png"
            alt="Sneakers Sale"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover"
          />
        </div>

        {/* RIGHT STACKED BANNERS */}
        <div className="flex flex-col gap-4">
          
          {/* TOP RIGHT */}
          <div className="relative h-[155px] sm:h-[170px] lg:h-[170px] rounded-3xl overflow-hidden">
            <Image
              src="/banners/banner-watches-sale.png"
              alt="Watches Sale"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          {/* BOTTOM RIGHT */}
          <div className="relative h-[155px] sm:h-[170px] lg:h-[170px] rounded-3xl overflow-hidden">
            <Image
              src="/banners/banner-gaming-sale.png"
              alt="Gaming Sale"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SaleBannerSection;
