import { ProfileCard } from "@/designs/profile-card";
import { AccountDetailsCard } from "@/designs/account-card";

export default function Home() {
	return (
		<div className="min-h-screen ">
			{/* Profile Card */}
			<div className="flex bg-[#cdcdcd] items-center justify-center h-screen">
        <ProfileCard />
      </div>

			{/* Account Details Card */}
			{/* <div className="flex h-screen bg-[#212121] items-center justify-center">
				<AccountDetailsCard />
			</div> */}
		</div>
	);
}
