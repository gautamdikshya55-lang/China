"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gray-50 border-t border-gray-200">
      {/* TOP CONTENT */}
      <div className="max-w-[1440px] mx-auto px-4 py-12">
        <h2 className="text-base font-semibold text-gray-900">
          ChinaBazaar | E-commerce Bazaar
        </h2>

        <p className="mt-4 max-w-6xl text-sm leading-7 text-gray-600">
          ChinaBazaar is a modern e-commerce marketplace offering a wide range of
          quality products including fashion, electronics, home essentials,
          beauty items, and accessories. We focus on affordability, fast
          delivery, and a smooth shopping experience for customers across Nepal.
        </p>

        <p className="mt-2 max-w-6xl text-sm leading-7 text-gray-600">
          Shop confidently with secure payment options, exclusive deals, and
          trusted sellers — all in one place.
        </p>

        {/* KEYWORD LINKS */}
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500">
          {[
            "Fashion",
            "Electronics",
            "Home & Living",
            "Beauty Products",
            "Shoes",
            "Bags",
            "Accessories",
            "Watches",
            "Headphones",
            "Mobile Accessories",
            "Gaming",
            "Skincare",
            "Kitchen Items",
          ].map((item) => (
            <span key={item} className="cursor-pointer hover:text-gray-900">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-200" />

      {/* BOTTOM FOOTER */}
      <div className="max-w-[1440px] mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* LOGO + ABOUT */}
          <div>
            <Image
              src="/assets/logo-chinabazar.png"
              alt="Chinabazar Logo"
              width={220}
              height={60}
              priority
            />

            <p className="mt-4 text-sm text-gray-600 max-w-xs leading-relaxed">
              Your trusted destination for quality products, unbeatable prices,
              and seamless online shopping.
            </p>

            <h4 className="mt-6 text-sm font-bold text-gray-900">
              Follow Us
            </h4>

            <div className="mt-3 flex gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border text-gray-600 hover:bg-gray-100 cursor-pointer">
                <FaInstagram />
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border text-gray-600 hover:bg-gray-100 cursor-pointer">
                <FaFacebookF />
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border text-gray-600 hover:bg-gray-100 cursor-pointer">
                <FaTiktok />
              </span>
            </div>
          </div>

          {/* CUSTOMER SERVICE */}
          <div>
            <h4 className="text-sm font-bold text-gray-900">
              Customer Service
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>Help Center</li>
              <li>Returns & Refunds</li>
              <li>Shipping Information</li>
              <li>Contact Support</li>
            </ul>
          </div>

          {/* ABOUT */}
          <div>
            <h4 className="text-sm font-bold text-gray-900">
              About Chinabazar
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>About Us</li>
              <li>Our Blog</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* PAYMENT METHODS */}
          <div>
            <h4 className="text-sm font-bold text-gray-900">
              Payment Methods
            </h4>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <Image
                src="/assets/esewa.png"
                alt="eSewa"
                width={70}
                height={36}
              />
              <Image
                src="/assets/khalti.png"
                alt="Khalti"
                width={70}
                height={36}
              />
              <Image
                src="/assets/cod.png"
                alt="Cash on Delivery"
                width={90}
                height={36}
              />
            </div>
          </div>

          {/* DOWNLOAD */}
          <div>
            <h4 className="text-sm font-bold text-gray-900">Download App</h4>
            <div className="mt-4 flex flex-col gap-3">
              <Image
                src="/assets/google.png"
                alt="Google Play"
                width={180}
                height={54}
              />
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-200">
        <p className="py-4 text-center text-xs text-gray-500">
          © 2025 Chinabazar. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
