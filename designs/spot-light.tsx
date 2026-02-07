export const Spotlight = () => {
	return (
		<>
			<div className="pointer-events-none absolute -top-70  -left-50 h-350 w-50 origin-top -rotate-45 blur-sm bg-[radial-gradient(ellipse_100px_1500px_at_50%_0%,rgba(255,255,255,0.15),transparent_70%)]"></div>
			<div className="pointer-events-none absolute -top-30  -left-50 h-350 w-20 origin-top -rotate-45 blur-md bg-[radial-gradient(ellipse_200px_1500px_at_50%_0%,rgba(255,255,255,0.15),transparent_70%)]"></div>
			<div className="pointer-events-none absolute top-20  -left-50 h-350 w-20 origin-top -rotate-45 blur-md bg-[radial-gradient(ellipse_200px_1200px_at_50%_0%,rgba(255,255,255,0.15),transparent_70%)]"></div>
		</>
	);
};
