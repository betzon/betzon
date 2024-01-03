import { NextResponse } from 'next/server'


// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // return NextResponse.redirect(new URL('/home', request.url)) REDIRECT USERS TO PAGES -> SICK

  return NextResponse.redirect(new URL('/', request.url))
}
export const config = {
  matcher: [
    '/chipbank/:path*',
    '/dashboard/:path*',
    '/match/:path*',
    '/notifications/:path*',
    '/onboarding/:path*',
    '/login/:path*',
    '/signup/:path*',
    '/profile/:path*',
    '/team/:path*',
    '/template/:path*',
    '/dashboard/:path*',
    '/wagers/:path*',
    '/settings/:path*',
    '/inbox/:path*'
  ],
}