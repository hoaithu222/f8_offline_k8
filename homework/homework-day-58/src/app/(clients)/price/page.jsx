import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { GrLinkNext } from "react-icons/gr";
export const metadata = {
  title: "Giá cả của Mindmap Flow",
  description: "Tìm hiểu về các gói giá và lợi ích của Mindmap Flow. Chọn gói phù hợp với nhu cầu của bạn.",
  keywords: "Mindmap Flow, giá cả, gói dịch vụ, sơ đồ tư duy, quản lý dự án",
  robots: "index, follow",

  icons: {
    icon: "https://img.icons8.com/?size=100&id=31090&format=png&color=000000",
  },
  openGraph: {
    type: "website",
    url: "https://mindmapflow.com/price",
    title: "Giá cả của Mindmap Flow",
    description: "Khám phá các gói giá của Mindmap Flow và lựa chọn gói dịch vụ tốt nhất cho bạn.",
    images: [
      {
        url: "https://mindmap.f8.edu.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fso-do-tu-duy.95dad645.jpg&w=3840&q=75",
        width: 1200,
        height: 630,
        alt: "Giá cả Mindmap Flow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mindmapflow",
    creator: "@creator_username",
    title: "Giá cả của Mindmap Flow",
    description: "Tìm hiểu các gói giá của Mindmap Flow để chọn lựa gói phù hợp nhất cho bạn.",
    images: ["https://mindmap.f8.edu.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fso-do-tu-duy.95dad645.jpg&w=3840&q=75"],
  },
};


export default function PricePage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-800">
          <span className="text-purple-600">Flexible</span> Plans
        </h2>
        <p className="text-lg text-gray-500 mt-2">
          Choose a plan that works best for you and your team.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8 px-6">
        {/* Basic Plan */}
        <div className="w-full md:w-1/4 p-8 rounded-xl shadow-lg bg-white text-left transition-transform hover:scale-105">
          <div className="text-center mb-6">
            <Image
              src="/price_1.jpg"
              alt="Basic Plan"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mt-4">Basic</h3>
            <h4 className="text-3xl font-bold text-gray-800 mt-2">
              $10<span className="text-lg font-normal"> / user</span>
            </h4>
          </div>
          <div className="space-y-4 text-gray-600">
            <div className="flex items-center gap-2">
              <TiTick className="text-green-500" />
              <span>Get started with</span> <strong>messaging</strong>
            </div>
            <div className="flex items-center gap-2">
              <TiTick className="text-green-500" />
              <span>Flexible</span> <strong>team meetings</strong>
            </div>
            <div className="flex items-center gap-2">
              <TiTick className="text-green-500" />
              <strong>5 TB</strong> <span>cloud storage</span>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="px-6 py-3 text-white bg-purple-600 rounded-full hover:bg-purple-700 flex items-center justify-center gap-2">
              Choose Plan <GrLinkNext />
            </button>
          </div>
        </div>

        {/* Startup Plan */}
        <div className="w-full md:w-1/4 p-8 rounded-xl shadow-lg bg-gray-900 text-white text-left transform scale-105">
          <div className="text-center mb-6">
            <Image
              src="/price_2.jpg"
              alt="Startup Plan"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-2xl font-semibold mt-4">Startup</h3>
            <h4 className="text-3xl font-bold mt-2">
              $24<span className="text-lg font-normal"> / user</span>
            </h4>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TiTick className="text-green-500" />
              <span>All features in</span> <strong>Basic</strong>
            </div>
            <div className="flex items-center gap-2">
              <TiTick className="text-green-500" />
              <span>Flexible</span> <strong>call scheduling</strong>
            </div>
            <div className="flex items-center gap-2">
              <TiTick className="text-green-500" />
              <strong>15 TB</strong> <span>cloud storage</span>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="px-6 py-3 text-white bg-purple-600 rounded-full hover:bg-purple-700 flex items-center justify-center gap-2">
              Choose Plan <GrLinkNext />
            </button>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="w-full md:w-1/4 p-8 rounded-xl shadow-lg bg-white text-left transition-transform hover:scale-105">
          <div className="text-center mb-6">
            <Image
              src="/price_3.jpg"
              alt="Enterprise Plan"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mt-4">
              Enterprise
            </h3>
            <h4 className="text-3xl font-bold text-gray-800 mt-2">
              $35<span className="text-lg font-normal"> / user</span>
            </h4>
          </div>
          <div className="space-y-4 text-gray-600">
            <div className="flex items-center gap-2">
              <TiTick className="text-green-500" />
              <span>All features in</span> <strong>Startup</strong>
            </div>
            <div className="flex items-center gap-2">
              <TiTick className="text-green-500" />
              <span>Growth</span> <strong>oriented</strong>
            </div>
            <div className="flex items-center gap-2">
              <TiTick className="text-green-500" />
              <strong>Unlimited</strong> <span>cloud storage</span>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="px-6 py-3 text-white bg-purple-600 rounded-full hover:bg-purple-700 flex items-center justify-center gap-4">
              Choose Plan <GrLinkNext />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
