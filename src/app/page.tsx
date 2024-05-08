import { signIn } from "@/auth";

export default function Home() {
	return (
		<main className="flex flex-col">
			<h1 className="text-3xl">Full Lobby</h1>
			<form
				action={async () => {
					"use server";
					await signIn();
				}}
			>
				<button type="submit">Sign in</button>
			</form>
		</main>
	);
}
