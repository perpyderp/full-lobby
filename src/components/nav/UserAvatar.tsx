import { AvatarFallback, Avatar, AvatarImage } from "../ui/Avatar";

export const UserAvatar: React.FC<{ imageUrl?: string | null }> = ({
	imageUrl,
}) => {
	return (
		<div>
			<Avatar>
				<AvatarImage
					src={imageUrl ? imageUrl : "https://github.com/shadcn.png"}
					alt="avatar"
				/>
				<AvatarFallback>?</AvatarFallback>
			</Avatar>
		</div>
	);
};
