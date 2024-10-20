"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Menu.css";

export default function Menu() {
  const pathname = usePathname();
  const activeItem = (path) => {
    return path === pathname;
  };
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        <li>
          <Link className={activeItem("/") ? "active" : ""} href="/">
            Trang chủ
          </Link>
        </li>
        <li>
          <Link className={activeItem("/about") ? "active" : ""} href="/about">
            Giới thiệu
          </Link>
        </li>
        <li>
          <Link
            className={activeItem("/product") ? "active" : ""}
            href="/product"
          >
            Sản phẩm
          </Link>
        </li>
      </ul>
    </div>
  );
}
