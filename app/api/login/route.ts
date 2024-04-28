import { NextResponse } from 'next/server';

export async function GET(req: Request) {
	const url = new URL(req.url);
	const redirec_url = url.searchParams.get('redirect_url');

	console.log('redirect_url', redirec_url);

	let res = NextResponse.redirect(new URL('/', req.url).toString());

	if (redirec_url) {
		res = NextResponse.redirect(redirec_url);
	}

	res.cookies.set('session', 'test', {
		httpOnly: true,
	});

	return res;
}
