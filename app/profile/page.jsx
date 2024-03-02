import MainAppTemplate from "../MainAppTemplete";
import ProfileInfo from "../components/ProfileInfo";
import ProfileSidebar from "../components/ProfileSidebar";

const Profile = () => {
	return (
		<MainAppTemplate>
			<div className="px-5 py-10 flex">
				<div className="w-1/4">
					<ProfileSidebar />
				</div>
				<div className="w-3/4">
					<ProfileInfo />
				</div>
			</div>
		</MainAppTemplate>
	);
};

export default Profile;
