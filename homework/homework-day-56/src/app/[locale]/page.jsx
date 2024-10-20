import { useTranslations } from "next-intl";

import HeaderPage from "@/components/Header/HeaderPage";
import Aside from "@/components/Aside/Aside";
import ContentPage from "@/components/content/ContentPage";
import Footer from "@/components/Footer/Footer";
export default function HomePage() {
  const t = useTranslations("HeaderPage");
  return (
    <div className="container mx-auto">
      <header>
        <HeaderPage />
      </header>
      <main className="flex">
        <div className="flex-1 p-4">
          <div className="text-center" style={{ fontSize: "22px" }}>
            <h1>{t("siteTitle")}</h1>
          </div>
          <div className="flex">
            <div className="w-1/4">
              <Aside />
            </div>
            <div className="w-3/4">
              <ContentPage />
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
