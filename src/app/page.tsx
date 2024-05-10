import { signIn } from "@/auth";

import { auth } from "@/auth";
import { Button } from "@/components/ui/Button";

export default async function Home() {
	const session = await auth();

	return (
		<main className="flex flex-col">
			<h1 className="text-3xl">Full Lobby</h1>
			<form
				action={async () => {
					"use server";
					await signIn();
				}}
			>
				<Button type="submit">Sign in</Button>
			</form>
		</main>
	);
}
