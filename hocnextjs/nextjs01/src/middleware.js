import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers";

export function middleware(request) {
    // const pathname = request.nextUrl.pathname;
    // console.log(`pathname middleware:${pathname}`);
    // const isLogin = false;
    // if (!isLogin && pathname !== "/auth/login") {
    //     //chuyển hướng  về trang login
    //     // Lấy URL của trang login (tuyệt đối)
    //     const loginUrl = new URL("/auth/login", request.url);
    //     console.log("" + loginUrl);
    //     // chuyển hướng thông qua hàm nextResponse.redirect
    //     return NextResponse.redirect(loginUrl);
    // }
    // const cookie = request.headers.get("cookie");
    // console.log(cookie)
    // lấy theo key
    // const name = request.cookies.get("name")?.value;
    // console.log(name);
    // lấy tất cả
    // const cookie = request.cookies.getAll();
    // console.log(cookie)
    const name = cookies().get("name")?.value;
    console.log(name);
    // áp dụng trong server component
    // cookies().set("token", "hello", {
    //     path: "/",
    //     maxAge: 600,
    //     httpOnly: true,
    // })
    // chỉ áp dụng với server action hoặc Router Handler
    const user = "Thu";
    // lay tat ca 
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user", user);
    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        }
    });
    // response.cookies.set("token", "hello", {
    //     path: "/",
    //     maxAge: 600,
    //     httpOnly: true,
    // });
    response.cookies.delete("token");
    response.headers.set("x-api-key", "hello");
    // Rewrite thay the 
    if (request.nextUrl.pathname.startsWith("/gioi-thieu")) {
        const newUrl = new URL("/about", request.url);
        return NextResponse.rewrite(newUrl);
    }
    return response;
}
export const config = {
    // matcher: ['/product/:path*', '/posts/:path*'],
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}