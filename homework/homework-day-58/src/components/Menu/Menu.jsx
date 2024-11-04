"use client";
import Link from "next/link";
import "./style.css";
import { usePathname } from "next/navigation";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect,useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Menu() {
  const hasAddedUser = useRef(false);
  const { user, isLoading } = useUser();
  
  const pathname = usePathname();

  const activeItem = (path) => {
    return path === pathname;
  };

  const addUser = async () => {
    const existingUsersResponse = await fetch(`${process.env.SERVER_API}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (existingUsersResponse.ok) {
      const existingUsers = await existingUsersResponse.json();
  
      
      const userExists = existingUsers.some(
        (existingUser) => existingUser.sub === user.sub || existingUser.email === user.email
      );
  
      if (!userExists) {
       
        const addUserResponse = await fetch(`${process.env.SERVER_API}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        return addUserResponse.ok;
      }
    }
    return false;
  };
  
  useEffect(() => {
    if (user && !hasAddedUser.current) {
      addUser();
      hasAddedUser.current = true; 
    }
  }, [user]);

  if (isLoading) {
    return <div>Đang tải...</div>;
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
