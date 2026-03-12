import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const sessionCookie = request.cookies.get('narsent_session');
    const isAuthPath = request.nextUrl.pathname === '/narsent-hq-vault-99/login';

    // Allow access to login page
    if (isAuthPath) {
        if (sessionCookie?.value === 'authenticated') {
            return NextResponse.redirect(new URL('/narsent-hq-vault-99', request.url));
        }
        return NextResponse.next();
    }

    // Protect all other /narsent-hq-vault-99 routes
    if (!sessionCookie || sessionCookie.value !== 'authenticated') {
        return NextResponse.redirect(new URL('/narsent-hq-vault-99/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/narsent-hq-vault-99/:path*'],
};
