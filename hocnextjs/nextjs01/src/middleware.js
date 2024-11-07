import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request) {
  // const pathname = request.nextUrl.pathname;
  // const isLogin = false;
  // if (!isLogin && pathname !== "/auth/login") {
  //   //Chuyển hướng về trang login
  //   // - Lấy URL của trang login (tuyệt đối)
  //   const loginUrl = new URL("/auth/login", request.url);
  //   // - Chuyển hướng thông qua hàm NextResponse.redirect()
  //   return NextResponse.redirect(loginUrl);
  // }
  // const cookie = request.headers.get("cookie");
  // console.log(cookie);
  // const name = request.cookies.get("name")?.value;
  // console.log(name);
  // const cookie = request.cookies.getAll();
  // console.log(cookie);
  // const name = cookies().get("name")?.value;
  // console.log(name);
  // cookies().set("token", "ahihi", {
  //   path: "/",
  //   maxAge: 600,
  //   httpOnly: true,
  // }); //Chỉ áp dụng với Server Action hoặc Router Handler
  const user = "Hoang An";
  //Lấy tất cả request header
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-user", user);
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  // response.cookies.set("token", "ahihi", {
  //   path: "/",
  //   maxAge: 600,
  //   httpOnly: true,
  // });
  // response.cookies.delete("token");
  response.headers.set("x-api-key", "ahihi");

  //Rewrite
  if (request.nextUrl.pathname.startsWith("/gioi-thieu")) {
    const newUrl = new URL("/about", request.url);
    return NextResponse.rewrite(newUrl);
  }
  return response;
}

export const config = {
  //   matcher: ["/products/:path*", "/posts/:path*"],
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
