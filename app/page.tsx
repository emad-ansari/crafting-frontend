// import { ProfileCard } from "@/designs/profile-card";
import { AccountDetailsCard } from "@/designs/account-card";
import { Spotlight } from "@/designs/spot-light";

export default function Home() {
	return (
		<div className="min-h-screen ">
			{/* Profile Card */}
			{/* <div className="flex bg-[#cdcdcd] items-center justify-center h-screen">
        <ProfileCard />
      </div> */}

			{/* Account Details Card  */}
			<div className="relative flex min-h-screen bg-[#212121] items-center justify-center">
				<Spotlight />
				<AccountDetailsCard />
			</div>

			{/* Spot Light Effect. */}
			{/* <div className="relative min-h-screen bg-[#212121] overflow-hidden text-white">
			</div> */}
		</div>
	);
}
