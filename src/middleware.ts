import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
const privatePaths = ["/admin/user"];
const authPaths = ["/admin/login", "/admin/register"];
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get("sessionToken")?.value;
  if (privatePaths.some((path) => pathname.startsWith(path)) && !sessionToken) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
  if (authPaths.some((path) => pathname.startsWith(path)) && sessionToken) {
    return NextResponse.redirect(new URL("/admin/user", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [...privatePaths, ...authPaths],
};
