import { error } from "console";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

export async function middleware(request: Request) {
  try {
    const session = await getSession();
    if (session && !session.user.family_name) {
      return NextResponse.redirect(new URL("/auth/form", request.url));
    }
    return NextResponse.next();
  } catch (errro) {
    throw error;
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
