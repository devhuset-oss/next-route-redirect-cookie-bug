import { NextRequest, NextResponse } from 'next/server';

const publicPaths = ['/no-session'];

export default async function middleware(req: NextRequest) {
	if (publicPaths.includes(req.nextUrl.pathname)) {
		return NextResponse.next();
	}

	const session = req.cookies.get('session')?.value;

	if (!session || session !== 'test') {
		return NextResponse.redirect(
			new URL('/no-session', req.nextUrl).toString()
		);
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		/*
		 * Match all paths except for:
		 * 1. /api/ routes
		 * 2. /_next/ (Next.js internals)
		 * 3. /_static (inside /public)
		 * 4. /_vercel (Vercel internals)
		 * 5. Static files (e.g. /favicon.ico, /sitemap.xml, /robots.txt, etc.)
		 */
		'/((?!api/|_next/|_static|_vercel|[\\w-]+\\.\\w+).*)',
	],
};
