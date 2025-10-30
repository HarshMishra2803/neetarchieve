import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="navbar flex justify-between items-center  px-40 ">
        <div className="logo ">
          <Image src="/logo.png" alt="Logo" width={240} height={240} />
        </div>

        <div className="links font-Roboto, sans-serif">
          <ul className="text-[#B0B5B2] flex gap-8 text-[14px]">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
                <Link href="/request">request</Link>
                </li>
            
                <li>
                <Link href="/store">store</Link>
                </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
