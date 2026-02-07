import { cn } from "@/lib/utils";

export const Gridlines = () => {
	return (
		<div
			className={cn(
				"pointer-events-none absolute inset-0 bg-size-[40px_40px] select-none",
				"bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
			)}
		/>
	);
};
