import React from "react";
import Link from "next/link";

const materials = [
  {
    title: "NEET Physics Books: HC Verma, DC Pandey & More",
    desc: "Find all important Physics books for NEET preparation compiled in one convenient location.",
    date: "May 8, 2025",
    link: "/Neet/physics",
  },
  {
    title: "NEET Mathematics Books: Cengage, Arihant & More",
    desc: "Access a wide range of Mathematics books required for effective JEE preparation.",
    date: "June 3, 2025",
    link: "/Neet/mathematics",
  },
  {
    title: "NEET Chemistry Books: Organic, Inorganic & Physical",
    desc: "Browse through essential Chemistry books for both Organic, Inorganic, and Physical sections.",
    date: "May 21, 2025",
    link: "/Neet/chemistry",
  },
  {
    title: "Coaching Materials: Allen & More",
    desc: "Get study materials from top coaching institutes like Allen, Resonance, and more.",
    date: "June 10, 2025",
    link: "/Neet/coaching",
  },
  {
    title: "All Test Series in One Place",
    desc: "Practice test series from top publishers to stay updated with NEET trends.",
    date: "June 5, 2025",
    link: "/Neet/test-series",
  },
  {
    title: "All Test Series in One Place",
    desc: "Practice test series from top publishers to stay updated with NEET trends.",
    date: "June 5, 2025",
    link: "/Neet/test-series",
  },
  {
    title: "All Test Series in One Place",
    desc: "Practice test series from top publishers to stay updated with NEET trends.",
    date: "June 5, 2025",
    link: "/Neet/test-series",
  },
];

const JeeStudyMaterial = () => {
  return ( 
    <div className="flex items-center justify-center min-h-screen md:min-h-0 md:pb-24 px-4 lg:pl-70 lg:pb-28 md:pt-3 md:pl-46
     ">
      <div className="w-full max-w-2xl text-[#F7F7F7] ">
        {/* Title */}
        <h1 className="text-3xl sm:text-3xl font-bold mb-10 text-center sm:text-left pt-12 lg:text-3xl pr-9
         lg:pl-2">
          NEET Study Material
        </h1>

        {/* List */}
        <div className="flex flex-col divide-y divide-gray-700">
          {materials.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-start justify-between py-6"
            >
              <div className="sm:max-w-[80%] pl-2  ">
                <Link
                  href={item.link}
                  className="font-semibold text-[17px] sm:text-[18px] underline cursor-pointer hover:text-gray-300 transition-colors"
                >
                  {item.title}
                </Link>
                <p className="text-sm sm:text-[15px] mt-1 text-gray-300">
                  {item.desc}
                </p>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mt-2 sm:mt-0 sm:text-right pl-2">
                {item.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JeeStudyMaterial;
