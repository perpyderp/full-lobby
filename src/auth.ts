import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";

import type { Provider } from "next-auth/providers";

import { db } from "./config/drizzle";

const providers: Provider[] = [
	GoogleProvider({
		clientId: process.env.AUTH_GOOGLE_CLIENT_ID!,
		clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET!,
	}),
	DiscordProvider({
		clientId: process.env.AUTH_DISCORD_CLIENT_ID!,
		clientSecret: process.env.AUTH_DISCORD_CLIENT_SECRET!,
	}),
];

export const providerMap = providers.map((provider) => {
	if (typeof provider === "function") {
		const providerData = provider();
		return { id: providerData.id, name: providerData.name };
	} else {
		return { id: provider.id, name: provider.name };
	}
});

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers,
	pages: {
		signIn: "/login",
	},
	adapter: DrizzleAdapter(db),
});
