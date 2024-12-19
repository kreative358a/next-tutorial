// export function middleware() {
//     console.log('hello there');
//   }
  
// export function middleware() {
// // export function middleware(request) {
//     return Response.json({ msg: 'hello there' });
//   }
  
//   export const config = {
//     matcher: '/about',
//   };

import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request:Request) {
// export function middleware(request: { url: string | URL | undefined; }) {
  return NextResponse.redirect(new URL('/', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/about/:path*', '/tours/:path*'],
};
