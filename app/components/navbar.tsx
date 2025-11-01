import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
    <div className="bar w-full bg-[#B2A3FF] h-9 flex items-center justify-center text-black font-semibold 
     lg:h-9
    ">
        Welcome to Neet-Archive!!
    </div>

      <nav
        className="
          navbar flex justify-between items-center  container 
             sm:px-8 md:px-14 lg:px-40 py-6
          lg:py-0
        "
      >
        {/* Logo */}
        <div className="logo cursor-pointer ">
          <Image
            src="/logo.png"
            alt="Logo"
            width={400}
            height={400}
            className="
              w-full h-full 
              sm:w-1 md:w-40 lg:w-72 
              object-contain

            "
            priority
          />
        </div>

        {/* Links */}
        <div className="links ">
          <ul
            className=" 
              text-[#B0B5B2] flex pl-13 
              gap-4  pr-12 sm:gap-6 md:gap-8 
              text-[15px] sm:text-[14px] md:text-[15px] 
            "
          >
            <li className="hover:text-white cursor-pointer transition-all">
              <Link href="/">home</Link>
            </li>
            <li className="hover:text-white cursor-pointer transition-all">
              <Link href="/request">request</Link>
            </li>
            <li className="hover:text-white cursor-pointer transition-all">
              <Link href="/store">store</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
