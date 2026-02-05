import Image from "next/image";
import { Ellipsis, Mail } from "lucide-react";

export const ProfileCard = () => {
	return (
		<div className="bg-white rounded-4xl p-0.5 min-w-90">
			<div className="bg-[#f9f9f9] rounded-4xl p-4 ">
				<div className="relative bg-[#282828] p-0.5 rounded-4xl">
					<Image
						src="https://aicdn.picsart.com/47eeb9f2-d3dc-40d0-86bc-dbae1d9032f2.png"
						alt="User"
						width={256}
						height={256}
						className=" w-full h-66  rounded-4xl"
					/>
					<div className=" absolute rounded-full  top-3 right-3 border border-white/20">
						<button className="flex items-center justify-center bg-linear-to-b from-white/20 to-transparent  w-10 h-10 top-3 right-3  rounded-full  shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:bg-black/30 transition-all duration-300 cursor-pointer backdrop-blur-sm">
							<Ellipsis className="text-white" />
						</button>
					</div>
				</div>
				<div className="flex flex-col justify-center gap-4 mt-4">
					<div className="flex flex-col ">
						<div className="flex items-center justify-between">
							<h3 className="font-bold text-gray-800 ">
								Abdul Hameed Afolabi
							</h3>
							<div className="flex items-center gap-3">
								<div className="flex items-center justify-center p-[0.5px] bg-white rounded-full">
									<div className="flex items-center justify-center bg-linear-to-b from-[#ebebeb] to-transparent  rounded-full w-8 h-8 backdrop-blur-sm cursor-pointer">
										<svg
											width={23}
											height={23}
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 640 640"
										>
											<path
												fill="#0862f6"
												d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"
											/>
										</svg>
									</div>
								</div>
								<div className="flex ietms-center justify-center p-[0.5px] bg-white rounded-full">
									<div className="flex items-center justify-center bg-linear-to-b from-[#ebebeb] to-transparent rounded-full w-8 h-8 backdrop-blur-2xl cursor-pointer">
										<Image
											src="/instagram.png"
											alt="instagram Logo"
											width={256}
											height={256}
											className="w-5 h-5"
										/>
									</div>
								</div>
							</div>
						</div>
						<span className="text-sm  font-medium text-gray-600 ">
							Design and Inshallah
						</span>
					</div>
					<div className="flex flex-row items-center justify-between">
						<div className="p-px bg-white rounded-2xl">
							<div className="flex flex-col gap-2  items-center justify-between bg-[#f5f5f5] rounded-2xl px-6 py-2 ">
								<span className="text-sm text-gray-500 font-sans font-medium">
									Earned
								</span>
								<span className="font-sans font-medium">
									$20k
								</span>
							</div>
						</div>
						<div className="p-px bg-white rounded-2xl">
							<div className="flex flex-col gap-2  items-center justify-between bg-[#f5f5f5] rounded-2xl px-6 py-2 backdrop-blur-sm">
								<span className="text-sm text-gray-500 font-sans font-medium">
									Clients
								</span>
								<span className="font-sans font-medium">
									50
								</span>
							</div>
						</div>
						<div className="p-px bg-white rounded-2xl">
							<div className="flex flex-col gap-2  items-center justify-between bg-[#f5f5f5] rounded-2xl px-6 py-2">
								<span className="text-sm text-gray-500 font-sans font-medium">
									Followers
								</span>
								<span className="font-sans font-medium">
									14.3k
								</span>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center bg-[#282828] text-white rounded-full p-0.5">
						<button className="flex items-center justify-center gap-2 bg-[#151515] w-full rounded-full py-4 text-sm font-sans font-medium cursor-pointer">
							<Mail className="w-4 h-4" />
							<span>Message</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
