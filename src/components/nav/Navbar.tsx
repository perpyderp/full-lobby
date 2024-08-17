import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "../ToggleTheme";
import { UserAvatar } from "./UserAvatar";
import { auth, signOut } from "@/auth";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuGroup,
	DropdownMenuItem,
} from "../ui/DropdownMenu";
import { LogoutButton } from "./LogoutButton";

export default async function Navbar() {
	const session = await auth();

	const user = session?.user;

	return (
		<nav className="flex gap-2 justify-between items-center px-1.5 py-0.5 bg-primary/70">
			{/* <SideNav /> */}
			<Link href="/" className="flex space-x-1.5 items-center">
				<Image src="/assets/logo.png" alt="logo" height={48} width={48} />
				<h1 className="text-xl font-semibold ml-2">Full Lobby</h1>
			</Link>
			<div className="flex-1 flex justify-evenly">
				<Link href="/">Home</Link>
				<Link href="/games">Games</Link>
				<Link href="/messages">Messages</Link>
			</div>
			{user && (
				<DropdownMenu>
					<DropdownMenuTrigger>
						<UserAvatar imageUrl={user.image} />
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56" align="end" forceMount>
						<DropdownMenuLabel className="font-normal">
							<div className="flex flex-col space-y-1">
								<p className="text-sm font-medium leading-none">{user.name}</p>
								<p className="text-xs leading-none text-muted-foreground">
									{user.email}
								</p>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem asChild>
								<Link href={"/profile/" + user.id}>Profile</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href={"/settings"}>Settings</Link>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<LogoutButton>Logout</LogoutButton>
					</DropdownMenuContent>
				</DropdownMenu>
			)}

			{/* <ModeToggle /> */}
		</nav>
	);
}
