import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";

import { db } from "./drizzle";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.AUTH_GOOGLE_CLIENT_ID!,
			clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET!,
		}),
		DiscordProvider({
			clientId: process.env.AUTH_DISCORD_CLIENT_ID!,
			clientSecret: process.env.AUTH_DISCORD_CLIENT_SECRET!,
		}),
	],
	adapter: DrizzleAdapter(db),
});
