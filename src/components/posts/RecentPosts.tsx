import { db } from "@/config/drizzle";
import { posts, users } from "@/config/drizzle/schema";

import { eq, InferSelectModel } from "drizzle-orm";
import Image from "next/image";

type Post = InferSelectModel<typeof posts>;
type User = InferSelectModel<typeof users>;

export default async function RecentPosts() {
	const posts = await db.query.posts.findMany({});

	return (
		<section id="posts" className="grid gap-2">
			{posts.map(async (post) => {
				const user = await db.query.users.findFirst({
					where: (users, { eq }) => eq(users.id, post.userId),
				});

				return (
					<article
						key={post.id}
						id={post.id}
						className="border-opacity-5 border-solid border-b-[1px] rounded-sm p-2"
					>
						<PostUserInfo user={user} imageHeight={30} imageWidth={30} />
						<h4 className="text-lg font-bold">{post.title}</h4>
						<p className="text-sm">{post.body}</p>
					</article>
				);
			})}
		</section>
	);
}

export const PostUserInfo: React.FC<{
	user?: User;
	imageHeight: number;
	imageWidth: number;
}> = ({ user, imageHeight, imageWidth }) => {
	if (!user) {
		return (
			<div className="flex gap-2">
				<Image src="logo.png" alt="" height={imageHeight} width={imageWidth} />
			</div>
		);
	}

	return (
		<div className="flex gap-2">
			<Image
				src={user.image ? user.image : "logo.png"}
				alt="user-img"
				height={imageHeight}
				width={imageWidth}
				className="rounded-full"
			/>
			<h3 className="font-semibold">{user.name ? user.name : "NONAME"}</h3>
		</div>
	);
};
