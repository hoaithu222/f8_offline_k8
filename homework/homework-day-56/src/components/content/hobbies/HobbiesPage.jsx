import { useTranslations } from "next-intl";
import React from "react";

export default function HobbiesPage() {
  const t = useTranslations("Hobbies");
  return (
    <div className="p-4">
      <h2 className="text-center mt-3 text-2xl">{t("title")}</h2>
      <ul>
        <li>{t("hobby1")}</li>
        <li>{t("hobby2")}</li>
        <li>{t("hobby3")}</li>
      </ul>
    </div>
  );
}
