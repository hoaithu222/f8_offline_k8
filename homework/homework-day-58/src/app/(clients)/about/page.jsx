import Image from "next/image";
import React from "react";
export const metadata = {
  title: "Giới thiệu về Mindmap Flow",
  description: "Mindmap Flow - Nền tảng mạnh mẽ để tạo và quản lý sơ đồ tư duy, giúp bạn tối ưu hóa quy trình học tập và làm việc.",
  keywords: "Mindmap Flow, sơ đồ tư duy, quản lý dự án, brainstorming, công cụ học tập",
  robots: "index, follow",
  icons: {
    icon: "https://img.icons8.com/?size=100&id=42224&format=png&color=000000",
  },
  openGraph: {
    type: "website",
    url: "https://mindmapflow.com/about",
    title: "Giới thiệu về Mindmap Flow",
    description: "Tìm hiểu về Mindmap Flow, công cụ giúp bạn tạo sơ đồ tư duy dễ dàng và hiệu quả trong quản lý dự án và học tập.",
    images: [
      {
        url: "https://mindmap.f8.edu.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fso-do-tu-duy.95dad645.jpg&w=3840&q=75",
        width: 1200,
        height: 630,
        alt: "Giới thiệu về Mindmap Flow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mindmapflow",
    creator: "@creator_username",
    title: "Giới thiệu về Mindmap Flow",
    description: "Khám phá Mindmap Flow - Công cụ tạo sơ đồ tư duy giúp bạn ghi nhớ và quản lý ý tưởng một cách trực quan.",
    images: ["https://mindmap.f8.edu.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fso-do-tu-duy.95dad645.jpg&w=3840&q=75"],
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-16 p-8 md:p-16 ">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="mt-4 text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/aboutImage.png"
            alt="About Us"
            width={733}
            height={415}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800">Our Story</h2>
          <p className="mt-4 text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div className="md:w-1/2 grid grid-cols-4 gap-4">
          <Image
            src="/Image01.png"
            alt="Team Member 1"
            width={162}
            height={186}
            className="rounded-lg shadow-md"
          />
          <Image
            src="/Image02.png"
            alt="Team Member 2"
            width={162}
            height={186}
            className="rounded-lg shadow-md"
          />
          <Image
            src="/Image03.png"
            alt="Team Member 3"
            width={162}
            height={186}
            className="rounded-lg shadow-md"
          />
          <Image
            src="/Image04.png"
            alt="Team Member 4"
            width={162}
            height={186}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
