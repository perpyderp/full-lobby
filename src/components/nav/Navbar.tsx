import Link from "next/link";
import SideNav from "./SideNav";
import { ModeToggle } from "../ToggleTheme";

export default function Navbar() {
	return (
		<nav className="flex gap-2 justify-between items-center">
			<SideNav />
			<Link href="/">Home</Link>
			<Link href="/games">Games</Link>
			<Link href="/messages">Messages</Link>
			<ModeToggle />
		</nav>
	);
}
