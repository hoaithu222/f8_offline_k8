import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function SocialPage() {
  const t = useTranslations("ContentSocial");
  return (
    <div className="p-6">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold">{t("title")}</h2>
      </div>
      <div className="info-user space-y-2">
        <Link
          href="#"
          className="flex items-center text-lg hover:text-orange-600 transition"
        >
          Phone: <span className="ml-1 text-orange-500">0123456789</span>
        </Link>
        <Link
          href="#"
          className="flex items-center text-lg hover:text-orange-600 transition"
        >
          Zalo: <span className="ml-1 text-orange-500">https://zalo.me</span>
        </Link>
        <Link
          href="#"
          className="flex items-center text-lg hover:text-orange-600 transition"
        >
          Email: <span className="ml-1 text-orange-500">contact@gmail.com</span>
        </Link>
        <Link
          href="https://www.facebook.com/groups/f8official"
          className="flex items-center text-lg hover:text-orange-600 transition"
        >
          Facebook:
          <span className="ml-1 text-orange-500">
            https://www.facebook.com/groups/f8official
          </span>
        </Link>
        <Link
          href="https://www.youtube.com/c/F8VNOfficial"
          className="flex items-center text-lg hover:text-orange-600 transition"
        >
          YouTube:
          <span className="ml-1 text-orange-500">
            https://www.youtube.com/c/F8VNOfficial
          </span>
        </Link>
      </div>
      <hr className="mt-4 border-gray-300" />
    </div>
  );
}
