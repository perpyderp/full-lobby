import { auth } from "@/auth";
import { cn } from "@/lib/utils";
import { signIn } from "@/auth";

const UserDailies: React.FC<{ className?: string }> = async ({
	className,
	...props
}) => {
	const session = await auth();

	if (!session?.user) {
		return (
			<div>
				<form
					action={async () => {
						"use server";
						await signIn("github", { redirectTo: "/dashboard" });
					}}
				>
					<button type="submit">Sign in</button> to get user dailies and level
					up your gamer profile!
				</form>{" "}
			</div>
		);
	}

	const user = session.user;

	return (
		<div className={cn("flex flex-col gap-4", className)} {...props}>
			<h3 className="text-2xl font-extrabold">Welcome back {user.name}!</h3>
			<h4 className="text-lg font-bold">Daily Tasks</h4>
			<ul className="flex flex-col">
				<li className="ml-4">Create a post</li>
				<li className="ml-4">Like 5 posts</li>
				<li className="ml-4">Comment on a post</li>
			</ul>
			<h4 className="text-lg font-bold">Weekly Tasks</h4>
			<ul className="">
				<li className="ml-4">Like 40 posts</li>
				<li className="ml-4">Make a new friend</li>
			</ul>
		</div>
	);
};

export default UserDailies;
