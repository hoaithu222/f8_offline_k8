import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

export default function LayoutPage({ children }) {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="main">{children}</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
