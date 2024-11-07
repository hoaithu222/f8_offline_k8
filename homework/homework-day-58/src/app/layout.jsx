import "./globals.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';


export const metadata = {
  title: "Mindmap Flow",
  description: "Mindmap Flow - Tạo và quản lý sơ đồ tư duy dễ dàng",
  keywords: "Mindmap Flow, mindmap, sơ đồ tư duy, quản lý dự án, brainstorming",
  robots: "index, follow",
  icons: {
    icon: "https://img.icons8.com/?size=100&id=wFfu6zXx15Yk&format=png&color=000000",
  },
  openGraph: {
    type: "website",
    url: "https://mindmapflow.com",
    title: "Mindmap Flow - Tạo sơ đồ tư duy trực quan",
    description: "Mindmap Flow giúp bạn tạo sơ đồ tư duy dễ dàng, hỗ trợ học tập và quản lý dự án hiệu quả.",
    images: [
      {
        url: "https://mindmap.f8.edu.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fso-do-tu-duy.95dad645.jpg&w=3840&q=75",
        width: 1200,
        height: 630,
        alt: "Mindmap Flow - Tạo sơ đồ tư duy trực quan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mindmapflow",
    creator: "@creator_username",
    title: "Mindmap Flow - Tạo sơ đồ tư duy trực quan",
    description: "Công cụ tạo sơ đồ tư duy trực quan giúp bạn ghi nhớ và quản lý ý tưởng dễ dàng.",
    images: ["https://mindmap.f8.edu.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fso-do-tu-duy.95dad645.jpg&w=3840&q=75"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <UserProvider>
        <body>{children}</body>
      </UserProvider>
    
    </html>
  );
}
