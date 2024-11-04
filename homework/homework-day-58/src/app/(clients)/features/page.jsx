import React from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
export const metadata = {
  title: "Tính năng của Mindmap Flow",
  description: "Khám phá các tính năng nổi bật của Mindmap Flow, giúp bạn tạo và quản lý sơ đồ tư duy một cách dễ dàng và hiệu quả.",
  keywords: "Mindmap Flow, tính năng, sơ đồ tư duy, quản lý dự án, brainstorming",
  robots: "index, follow",
  icons: {
    icon: "https://img.icons8.com/?size=100&id=cVduSEkUC8AV&format=png&color=000000",
  },
  openGraph: {
    type: "website",
    url: "https://mindmapflow.com/features",
    title: "Tính năng của Mindmap Flow",
    description: "Tìm hiểu các tính năng nổi bật của Mindmap Flow, công cụ giúp bạn tối ưu hóa quy trình học tập và làm việc.",
    images: [
      {
        url: "https://mindmap.f8.edu.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fso-do-tu-duy.95dad645.jpg&w=3840&q=75",
        width: 1200,
        height: 630,
        alt: "Tính năng Mindmap Flow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mindmapflow",
    creator: "@creator_username",
    title: "Tính năng của Mindmap Flow",
    description: "Khám phá tính năng của Mindmap Flow - Công cụ giúp bạn dễ dàng tạo sơ đồ tư duy và quản lý ý tưởng hiệu quả.",
    images: ["https://mindmap.f8.edu.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fso-do-tu-duy.95dad645.jpg&w=3840&q=75"],
  },
};

export default function FeaturesPage() {
  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">Features</h2>
        <p className="mt-4 text-gray-600">
          The main aim of creating FWR blocks is to help designers, developers
          and agencies create websites and web apps quickly and easily. Each and
          every block uses minimal custom styling and is based on the utility
          first Tailwind framework.
        </p>
        <button className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
          Learn More
        </button>
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-8">
        <div className="inner-item w-full md:w-1/4 p-6 bg-white rounded-lg shadow-lg text-center">
          <BsLightningChargeFill className="text-purple-500 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Fresh Design</h3>
          <p className="mt-2 text-gray-600">
            FWR blocks bring in an air of fresh design with their creative
            layouts and blocks, which are easily customizable.
          </p>
        </div>
        <div className="inner-item w-full md:w-1/3 p-6 bg-white rounded-lg shadow-lg text-center">
          <FaCode className="text-purple-500 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Clean Code</h3>
          <p className="mt-2 text-gray-600">
            FWR blocks are the cleanest pieces of HTML blocks, which are built
            with utmost care to quality and usability.
          </p>
        </div>
        <div className="inner-item w-full md:w-1/3 p-6 bg-white rounded-lg shadow-lg text-center">
          <IoSettings className="text-purple-500 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Perfect Tool</h3>
          <p className="mt-2 text-gray-600">
            FWR blocks is a perfect tool for designers, developers and agencies
            looking to create stunning websites in no time.
          </p>
        </div>
      </div>
    </div>
  );
}
