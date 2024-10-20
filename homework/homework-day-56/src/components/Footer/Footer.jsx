import { useTranslations } from "next-intl";
import React from "react";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <div>
      <div className="text-center" style={{ color: "orange" }}>
        {t("copyright")}
      </div>
    </div>
  );
}
