import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Full Lobby",
	description: "Connect and showcase your achievements with fellow gamers",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<SessionProvider>
				<body className={inter.className}>{children}</body>
			</SessionProvider>
		</html>
	);
}
