import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Aside() {
  const t = useTranslations("Aside");

  return (
    <div className="p-4">
      <div className="avatar mb-4">
        <Image
          src="/assets/images/f8.jpg"
          alt="Description"
          width={200}
          height={200}
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{t("profileTitle")}</h3>
      <div className="my-skill mb-4">
        <h2 className="text-xl font-semibold mb-2">{t("skills")}</h2>
        <p className="border-b border-gray-300 mb-3 pb-2">
          <span className="font-bold">{t("web-title")}</span>: {t("web")}
        </p>
        <p className="border-b border-gray-300 mb-3 pb-2">
          <span className="font-bold">{t("other-title")}</span>: {t("other")}
        </p>
      </div>
      <div className="histories">
        <h2 className="text-xl font-semibold mb-2">{t("histories-title")}</h2>
        <div className="list">
          <p className="border-b border-gray-300 mb-3 pb-2">
            <span className="font-bold">Junior High School:</span>{" "}
            {t("histories.juniorHighSchool")}
          </p>
          <p className="border-b border-gray-300 mb-3 pb-2">
            <span className="font-bold">High School:</span>{" "}
            {t("histories.highSchool")}
          </p>
          <p className="border-b border-gray-300 mb-3 pb-2">
            <span className="font-bold">College:</span> {t("histories.college")}
          </p>
        </div>
      </div>
    </div>
  );
}
