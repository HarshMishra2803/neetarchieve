import React from "react";
import { Roboto } from "next/font/google";
import Book from "./components/book";


const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

const Page = () => {
  return (
    <>
    <div
      className={`flex flex-col md:flex-row items-start justify-between mx-auto max-w-6xl px-6 py-10 min-h-[80vh] lg:pl-24 md:gap-8 md:pr-11 md:pt-8 md:min-h-0
        md:mr-32
         ${roboto.className}`}
    >
      {/* Left Sidebar */}
      <div className="text-[#B0B5B2] text-[14px] md:w-1/4 w-full md:text-left text-center md:mb-0 mb-8 pr-10">
        <ul className="flex md:flex-col flex-col  justify-center md:justify-start gap-4 md:gap-7 md:pl-22  pr-45 lg:pl-4  ">
          <li className="cursor-pointer pr-2 ">Community</li>
          <li className="cursor-pointer underline pr-7">Discord</li>
          <li className="cursor-pointer underline pr-5">Telegram</li>
        </ul>
      </div>

      {/* Right Content */}
      <div className="text-[#F7F7F7]  w-full flex flex-col gap-5 pt-12   ">
        <h1 className="text-[32px] lg:text-[44px] font-bold pb-6">NEET Archive</h1>

        <p className="text-[16px] sm:text-[17px] md:text-[18px] max-w-2xl font-medium leading-relaxed text-[#F7F7F7]  lg:text-[19px]    ">
          Welcome to NeetArchive – your one-stop destination for everything
          NEET. Whether you're just beginning your preparation or revising in
          the final stretch, we bring you a complete collection of study
          materials, previous year papers, NCERTs, reference books, notes, and
          more, all in one place. No more hunting across the internet.
          Everything you need is right here.
        </p>

        <p className="text-[16px] sm:text-[17px] md:text-[18px] max-w-2xl font-medium leading-relaxed text-[#F7F7F7] pt-6  lg:text-[19px]     ">
          Designed with the serious aspirant in mind, NeetArchive is more than
          just a resource hub, it's your preparation partner. Stay focused with
          organized content, access trusted materials instantly, and make your
          NEET journey smarter and smoother. Let's crack NEET, the efficient
          way.
        </p>

      </div>


      
    </div>
    <Book/>
  </>
  );
};

export default Page;
