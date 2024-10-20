import { useTranslations } from "next-intl";
import React from "react";
import Link from "next/link";
import "./style.css";

export default function ProjectPage() {
  const t = useTranslations("Project");

  return (
    <div className="p-4">
      <div className="inner-title text-center mb-4">
        <h2 className="text-2xl font-semibold">{t("title")}</h2>
      </div>
      <div className="project-item mb-6 border-b border-gray-300 pb-2">
        <h3 className="text-xl font-semibold">{t("project1.title")}</h3>
        <p>{t("project1.desc")}</p>
        <div className="mt-4 flex space-x-4">
          <Link
            href="#"
            className="text-orange-500 hover:text-orange-700 transition"
          >
            Demo
          </Link>
          <Link
            href="#"
            className="text-orange-500 hover:text-orange-700 transition"
          >
            Code
          </Link>
        </div>
      </div>
      <div className="project-item mb-6 border-b border-gray-300 pb-2">
        <h3 className="text-xl font-semibold">{t("project2.title")}</h3>
        <p>{t("project2.desc")}</p>
        <div className="mt-4 flex space-x-4">
          <Link
            href="#"
            className="text-orange-500 hover:text-orange-700 transition"
          >
            Demo
          </Link>
          <Link
            href="#"
            className="text-orange-500 hover:text-orange-700 transition"
          >
            Code
          </Link>
        </div>
      </div>
    </div>
  );
}
