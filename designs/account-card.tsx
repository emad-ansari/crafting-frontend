import { ArrowRightLeft, Ellipsis, Plus, Send } from "lucide-react";
import Image from "next/image";

export const AccountDetailsCard = () => {
	return (
		<div className="flex flex-col gap-3 bg-[#000000] rounded-[40px] p-1 w-md">
			<div className="flex flex-col gap-6 bg-[#222222] backdrop-blur-4xl rounded-[36px] p-4 border border-[#29292b] w-full">
				<div className="flex flex-row items-center justify-between">
					<div className="flex items-center  gap-2">
						<div className="flex rounded-full bg-gray-400 p-1">
							<Image
								src="/avatar.png"
								alt="Avatar"
								width={256}
								height={256}
								className="w-10 h-10"
							/>
						</div>
						<h2 className="text-2xl text-white font-bold ">
							Assim's Account
						</h2>
					</div>
					<div>
						<div className="p-3 rounded-full bg-[#29292b]">
							<Ellipsis className="w-5 h-5 text-white" />
						</div>
					</div>
				</div>
				<div>
					<span className="text-[#737373]">Available Balance</span>
					<h1 className="text-[28px] font-bold text-white">
						$64,434
					</h1>
				</div>
				<div className="flex items-center justify-between">
					<button className="flex items-center justify-center gap-2 bg-[#29292b] text-white px-5 py-2.5 rounded-full font-semibold cursor-pointer">
						<Plus className="w-5 h-5" />
						<span>Top up</span>
					</button>
					<button className="flex items-center justify-center gap-2 bg-[#29292b] text-white px-5 py-2.5 rounded-full font-semibold cursor-pointer">
						<Send className="w-5 h-5" />
						<span>Transfer</span>
					</button>
					<button className="flex items-center justify-center gap-2 bg-[#29292b] text-white px-5 py-2.5 rounded-full font-semibold cursor-pointer">
						<ArrowRightLeft className="w-5 h-5" />
						<span>Exchange</span>
					</button>
				</div>
			</div>
			<div className="flex items-center justify-center mb-2">
				<span className="uppercase text-[#5f5f61] text-sm tracking-wider">
					MAY 27, 2025 | REFRESHED EVERY 6HRS
				</span>
			</div>
		</div>
	);
};
