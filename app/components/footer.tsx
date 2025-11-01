import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1A1C1A] text-gray-300 pb-56 ">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12  md:pl-40
      ">
        {/* LEFT SIDE */}
        <div className="flex flex-col items-start md:w-1/3 space-y-4 text-sm [@media(max-width:320px)]:text-[10px]">
          <Image
            src="/logo.png"
            alt="NEET 2026 Logo"
            width={400}
            height={400}
            className="

    w-full pr-6 sm:w-40 md:w-56 lg:w-72 
    h-auto 
    object-contain
  "
            priority
          />
          <div className="lg:pl-20   md:pl-17">
            <p className="text-sm text-gray-400">
              © 2025 Neetarchive. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              contactneetarchive@gmail.com
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-8 text-sm md:w-2/3 lg:pt-12">
          <div>
            <h4 className="text-gray-400 mb-3 font-medium">New</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Short Notes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  PG 700+ Illustration
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-400 mb-3 font-medium">Trending</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Notes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Coaching Material
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-400 mb-3 font-medium">Classic</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  HC Verma
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  MS Chauhan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cengage
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-400 mb-3 font-medium">Popular</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  N Avasthi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  A Das Gupta
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Anurag Mishra
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-400 mb-3 font-medium">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
