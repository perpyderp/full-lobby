"use client";

import { signOut } from "@/auth";
import { DropdownMenuItem } from "../ui/DropdownMenu";
import { ReactNode } from "react";

export const LogoutButton: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	return (
		<DropdownMenuItem
			onSelect={(event) => {
				event.preventDefault();
				signOut({
					redirect: true,
					redirectTo: "/",
				});
			}}
		>
			{children}
		</DropdownMenuItem>
	);
};
