import Image from "next/image";

export default function NotFound() {
	return (
		<main className="min-h-screen">
			<Image
				src="/assets/mario_thinking.png"
				alt="mario_thinking"
				height={48}
				width={48}
			/>
			<div className="grid h-full align-middle justify-center">
				<h2 className="text-2xl">Page couldn&apos;t be found</h2>
				<p>
					We couldn&apos;t find the resource you&apos;re requesting. Please make
					sure the resource you&apos;re requesting is correct.
				</p>
			</div>
		</main>
	);
}
