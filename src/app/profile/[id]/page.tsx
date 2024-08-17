import { db } from "@/config/drizzle";
import { notFound } from "next/navigation";

type ProfilePageProps = {
	params: {
		id: string;
	};
};

export default async function ({ params: { id } }: ProfilePageProps) {
	const user = await db.query.users.findFirst({
		where: (users, { eq }) => eq(users.id, id),
	});

	if (!user) {
		notFound();
	}

	return (
		<div className="">
			<h1 className="text-3xl">{user.name}</h1>
		</div>
	);
}
