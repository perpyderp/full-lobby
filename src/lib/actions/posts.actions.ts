"use server";

import { db } from "@/config/drizzle";
import { posts } from "@/config/drizzle/schema";
import { CreatePostSchema } from "../schemas";
import { z } from "zod";
import { revalidatePath } from "next/cache";

type NewPost = z.infer<typeof CreatePostSchema>;

export const createPost = async (values: NewPost) => {
	try {
		const isValid = CreatePostSchema.parse(values);

		const newPost = await db.insert(posts).values(values).returning();

		revalidatePath("/");

		if (!newPost) return { error: "Couldn't create post" };
		if (newPost[0].id) return { success: "Post created", post: newPost };
	} catch (e) {
		console.log(e);
	}
};
