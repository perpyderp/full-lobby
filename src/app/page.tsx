import { auth } from "@/auth";
import PostForm from "@/components/posts/PostForm";
import RecentPosts from "@/components/posts/RecentPosts";
import { SignUpForm } from "@/components/SignUpForm";
import UserDailies from "@/components/user-dailies/UserDailies";

export default async function Home() {
	const session = await auth();

	return (
		<main className="grid">
			<div className="grid sm:grid-cols-2 justify-center px-4 py-8 gap-2 mb-2">
				<UserDailies className="pb-4" />
				<div className="flex flex-col gap-2">
					{session?.user?.id ? (
						<PostForm userId={session?.user?.id} />
					) : (
						<SignUpForm />
					)}
					<h2 id="recent-post-header" className=""></h2>
					<RecentPosts />
				</div>
			</div>
		</main>
	);
}

export const runtime = "edge";
