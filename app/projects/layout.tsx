export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10 w-full">
			<div className="inline-block max-w-full text-center justify-center">
				{children}
			</div>
		</section>
	);
}
