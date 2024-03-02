import AddressInformation from "./AddressInformation";
import PersonalInformation from "./PersonalInformation";
import ProfileDisplayWithImage from "./ProfileDisplayWithImage";

const ProfileInfo = () => {
	return (
		<div>
			<h1 className="font-bold text-2xl text-[#181818] mb-10">Profile</h1>
			<ProfileDisplayWithImage />
			<PersonalInformation />
			<AddressInformation />
		</div>
	);
};

export default ProfileInfo;
