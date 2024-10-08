import { redirect } from "next/navigation";
import { signIn, auth, providerMap } from "@/auth";
import { AuthError } from "next-auth";
import { cookies } from "next/headers";

export default function Login() {
	const csrfToken = cookies().get("authjs.csrf-token")?.value ?? "";

	return (
		<div className="flex flex-col gap-2">
			{Object.values(providerMap).map((provider) => (
				<form
					key={provider.id}
					action={async () => {
						"use server";
						try {
							await signIn(provider.id);
						} catch (error) {
							// Signin can fail for a number of reasons, such as the user
							// not existing, or the user not having the correct role.
							// In some cases, you may want to redirect to a custom error
							if (error instanceof AuthError) {
								return redirect(
									`${process.env.AUTH_URL}/login?error=${error.type}`
								);
							}

							// Otherwise if a redirects happens NextJS can handle it
							// so you can just re-thrown the error and let NextJS handle it.
							// Docs:
							// https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
							throw error;
						}
					}}
				>
					<input type="hidden" name="csrfToken" value={csrfToken} />
					<button type="submit">
						<span>Sign in with {provider.name}</span>
					</button>
				</form>
			))}
		</div>
	);
}
