export default function Home() {
	return (
		<div>
			<p>You are not logged in.</p>
			<div>
				<a href="/api/login">Login withouth redirect</a>
			</div>
			<div>
				<a href="/api/login?redirect_url=http://localhost:3001/admin">
					Login with redirect
				</a>
			</div>
		</div>
	);
}
