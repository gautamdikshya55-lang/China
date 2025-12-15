import HeroBanner from "@/components/home/HeroBanner";
import TodayDeals from "@/components/home/TodayDeals";
import SaleStrips from "@/components/home/SaleStrips";
import BestDealsSection from "@/components/home/BestDealsSection";
import SaleBannerSection from "@/components/home/SaleBannerSection";
import LiveSell from "@/components/home/LiveSell";
import FlashDeals from "@/components/home/FlashDeals";
import DownSaleBannerSection from "@/components/home/DownSaleBannerSection";
import SpecialOffers from "@/components/home/SpecialOffers";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <main>
      <HeroBanner />
      <TodayDeals />
      <SaleStrips />

      <BestDealsSection />

      <SaleBannerSection />

     

      {/* ✅ ONLY ONE LIVE SELL */}
      <LiveSell />
       <FlashDeals />
       <DownSaleBannerSection />
       <SpecialOffers />
         <Footer />

    </main>
  );
}
