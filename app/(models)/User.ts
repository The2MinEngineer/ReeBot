import mongoose, { Schema } from "mongoose";

if (!process.env.MONGODB_URI) {
	throw new Error("MONGODB_URI environment variable is not defined.");
}

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const userSchema = new Schema(
	{
		fullname: {
			type: String,
			required: [true, "fullname is required!"],
			minLength: [4, "fullname should be at least 4 characters long"],
			maxLength: [30, "fullname should be less than 30 characters"],
		},
		email: {
			type: String,
			unique: true,
			required: [true, "email is required!"],
			match: [
				/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
				"Invalid email address!",
			],
		},
		password: {
			type: String,
			required: [true, "password is required!"],
			select: false,
		},
		// telephone: {
		// 	type: String,
		// 	required: [true, "phone number is required!"],
		// 	match: [
		// 		/^(?:\+234|0)([7-9]{1})([0-9]{9})$/,
		// 		"Invalid Nigerian phone number!",
		// 	],
		// },
		// gender: {
		// 	type: String,
		// 	required: [true, "Gender is required!"],
		// },
	},
	{
		timestamps: true,
	}
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
