
export const metadata = {
  title: "Liên hệ với Mindmap Flow",
  description: "Chúng tôi luôn sẵn sàng lắng nghe ý kiến của bạn. Hãy liên hệ với Mindmap Flow để được hỗ trợ tốt nhất.",
  keywords: "Mindmap Flow, liên hệ, hỗ trợ, ý kiến khách hàng",
  robots: "index, follow",
  icons: {
    icon: "https://img.icons8.com/?size=100&id=XwWjVXhMRcxY&format=png&color=000000",
  },
  openGraph: {
    type: "website",
    url: "https://mindmapflow.com/contact",
    title: "Liên hệ với Mindmap Flow",
    description: "Để được hỗ trợ và giải đáp thắc mắc, hãy liên hệ với Mindmap Flow ngay hôm nay.",
    images: [
      {
        url: "https://mindmap.f8.edu.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fso-do-tu-duy.95dad645.jpg&w=3840&q=75",
        width: 1200,
        height: 630,
        alt: "Liên hệ Mindmap Flow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mindmapflow",
    creator: "@creator_username",
    title: "Liên hệ với Mindmap Flow",
    description: "Có câu hỏi hoặc cần hỗ trợ? Hãy liên hệ với chúng tôi để được giúp đỡ.",
    images: ["https://mindmap.f8.edu.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fso-do-tu-duy.95dad645.jpg&w=3840&q=75"],
  },
};

export default function ContactPage() {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center text-purple-600 mb-6">
            Contact Us
          </h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Write your message..."
              className="w-full px-4 py-2 border rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
