"use client";
import Link from "next/link";
import "./style.css";
import { usePathname } from "next/navigation";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect } from "react";
import useSWR, { mutate } from "swr";


const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  return response.json();
};

export default function Menu() {
  const { user, isLoading } = useUser();
  const pathname = usePathname();

  const { data: users, error } = useSWR(
    process.env.SERVER_API ? `${process.env.SERVER_API}/users` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

  const activeItem = (path) => {
    return path === pathname;
  };

  useEffect(() => {
    const checkAndAddUser = async () => {
      if (!user || !users) return;

      const userExists = users.some(
        (existingUser) => existingUser.sub === user.sub || existingUser.email === user.email
      );

      if (!userExists) {
        try {
          const response = await fetch(`${process.env.SERVER_API}/users`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });

          if (response.ok) {
            mutate(`${process.env.SERVER_API}/users`);
          }
        } catch (error) {
          console.error("Error adding user:", error);
        }
      }
    };

    checkAndAddUser();
  }, [user, users]);

  if (isLoading) {
    return <div>Đang tải...</div>;
  }

  if (error) {
    console.error("Error fetching users:", error);
  }

  return (
    <div className="inner-menu">
      <ul>
        <li>
          <Link href="/" className={activeItem("/") ? "active" : ""}>
            Trang Chủ
          </Link>
        </li>
        <li>
          <Link href="/about" className={activeItem("/about") ? "active" : ""}>
            Giới Thiệu
          </Link>
        </li>
        <li>
          <Link href="/features" className={activeItem("/features") ? "active" : ""}>
            Tính năng
          </Link>
        </li>
        <li>
          <Link href="/price" className={activeItem("/price") ? "active" : ""}>
            Bảng giá
          </Link>
        </li>
        <li>
          <Link href="/contact" className={activeItem("/contact") ? "active" : ""}>
            Liên hệ
          </Link>
        </li>
      </ul>

      <div>
        {user ? (
          <div className="user-info">
            <span>Hi, {user.name}</span>
            <Link href="/my-mindmap" className="mindmap">Mindmap</Link>
            <Link href="/api/auth/logout" className="logout">Đăng xuất</Link>
          </div>
        ) : (
          <div className="auth">
            <div className="login">
              <Link href="/api/auth/login">Đăng nhập</Link>
            </div>
            <div className="register">
              <Link href="/api/auth/login">Đăng kí</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}