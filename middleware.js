import { NextResponse } from "next/server";
import { compactVerify } from "jose";

export async function middleware(request) {
  const jwt = request.cookies.get("Token");
  //console.log(jwt)

  if (!jwt) return NextResponse.redirect(new URL("/login", request.url));

  // this condition avoid to show the login page if the user is logged in
  // if (jwt) {
  //   if (request.nextUrl.pathname.includes("/login")) {
  //     try {
  //       await jwtVerify(jwt, new TextEncoder().encode("secret"));
  //       return NextResponse.redirect(new URL("/dashboard", request.url));
  //     } catch (error) {
  //       return NextResponse.next();
  //     }
  //   }
  // }

  try {
    const secret = new TextEncoder().encode(process.env.SECRET);
    const respuesta = await compactVerify(jwt.value, secret);
    //console.log(respuesta);
    return NextResponse.next();
  } catch (error) {
    console.log("err:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/", "/nuevo"],
};
