import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import CategoryNavigation from "@/components/home/CategoryNavigation";



export const metadata: Metadata = {
  title: "Chinabazar",
  description: "E-commerce website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <CategoryNavigation />
        {children}
      </body>
    </html>
  );
}
