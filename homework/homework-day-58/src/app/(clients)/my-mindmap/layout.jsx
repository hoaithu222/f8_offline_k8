import React from 'react'
export const metadata = {
    title: "My Mindmap - Mindmap Flow",
    description: "Khám phá và quản lý các sơ đồ tư duy của bạn trên Mindmap Flow. Tối ưu hóa quy trình tư duy của bạn ngay hôm nay.",
    keywords: "Mindmap Flow, my mindmap, sơ đồ tư duy, quản lý ý tưởng, tư duy sáng tạo",
    robots: "index, follow",
    icons: {
      icon: "https://img.icons8.com/?size=100&id=gCKTJ4zt0XHe&format=png&color=000000",
    },
    openGraph: {
      type: "website",
      url: "https://mindmapflow.com/my-mindmap",
      title: "My Mindmap - Mindmap Flow",
      description: "Quản lý và tối ưu hóa các sơ đồ tư duy của bạn với Mindmap Flow.",
      images: [
        {
          url: "https://mindmap.f8.edu.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fso-do-tu-duy.95dad645.jpg&w=3840&q=75",
          width: 1200,
          height: 630,
          alt: "My Mindmap - Mindmap Flow",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@mindmapflow",
      creator: "@creator_username",
      title: "My Mindmap - Mindmap Flow",
      description: "Quản lý và khám phá các sơ đồ tư duy của bạn trên Mindmap Flow.",
      images: ["https://mindmap.f8.edu.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fso-do-tu-duy.95dad645.jpg&w=3840&q=75"],
    },
  };
  
export default function MindmapLayout({children}) {
  return (
    <div>{children}</div>
  )
}
