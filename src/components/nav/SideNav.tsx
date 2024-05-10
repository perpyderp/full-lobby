import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/Sheet";
import { Button } from "../ui/Button";

export default function SideNav() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button>Open</Button>
			</SheetTrigger>
			<SheetContent className="flex flex-col gap-2 items-center">
				<Link href="/">Home</Link>
				<Link href="/games">Games</Link>
				<Link href="/messages"></Link>
			</SheetContent>
		</Sheet>
	);
}
