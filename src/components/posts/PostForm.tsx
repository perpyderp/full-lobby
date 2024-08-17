"use client";

import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/Form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreatePostSchema } from "@/lib/schemas";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/TextArea";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/Icons";
import { useTransition } from "react";
import { createPost } from "@/lib/actions/posts.actions";
import { toast } from "../ui/UseToast";

type PostFormProps = {
	userId: string;
};

const PostForm: React.FC<PostFormProps> = ({ userId }) => {
	const [isPosting, startTransition] = useTransition();

	const form = useForm<z.infer<typeof CreatePostSchema>>({
		resolver: zodResolver(CreatePostSchema),
		defaultValues: {
			body: "",
			title: "",
			userId: userId,
		},
	});

	const handleSubmit = async (newPost: z.infer<typeof CreatePostSchema>) => {
		const valid = CreatePostSchema.safeParse(newPost);

		if (valid) {
			startTransition(async () => {
				await createPost(newPost);
				toast({
					title: "Successfully created post!",
				});
			});
		} else {
			toast({
				title: "Post is invalid.",
				description: "Post object did not pass schema.",
			});
		}
	};

	console.log(form.formState.errors);

	return (
		<Form {...form}>
			<form className="space-y-2" onSubmit={form.handleSubmit(handleSubmit)}>
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder="Enter a title"
									{...field}
									disabled={isPosting}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="body"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Textarea
									placeholder="Gamer moment..."
									{...field}
									disabled={isPosting}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" disabled={isPosting}>
					{isPosting && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
					Create post
				</Button>
			</form>
		</Form>
	);
};

export default PostForm;
