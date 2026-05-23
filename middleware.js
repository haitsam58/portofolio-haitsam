import { NextResponse } from 'next/server';

export function middleware(request) {
    const referer = request.headers.get('referer') || '';

    if (request.nextUrl.pathname.includes('foto1.jpeg')) {

        const allowed =
            referer.includes('portfolio-haitsam.vercel.app');

        if (!allowed) {
            return new NextResponse(
                'Forbidden',
                { status: 403 }
            );
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/foto1.jpeg']
}
