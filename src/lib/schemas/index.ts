import { posts } from "@/config/drizzle/schema";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const CreatePostSchema = createInsertSchema(posts, {
	title: z
		.string()
		.min(1, { message: "Title is required." })
		.max(20, { message: "Title cannot exceed 20 characters" }),
	body: z
		.string()
		.min(1, { message: "Body is required" })
		.max(500, { message: "Body exceeds 500 characters" }),
});
