import { Metadata } from "next";

export const metadata: Metadata = {
  title: "F8- Học lập trình để đi làm",
  description: "F8 chuyên đào tạo web số 1 việt nam",
  keywords: "html-css, js,react",
  openGraph: {
    title: "F8-học lập trình để đi làm",
    images: ["https://fullstatck.edu.vn"],
  },
  icons: {
    icon: "https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
