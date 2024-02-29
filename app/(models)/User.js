import mongoose from "mongoose";

const { Schema } = mongoose;

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
		telephone: {
			type: Number,
			unique: true,
			required: [true, "telephone is required!"],
			match: [
				/^(?:(?:(?:\+?234(?:\d{1,})?|0)\d*)?(?:\(\d{3}\)|\d{3})|\d{4})(?:\W*\d{3})?\W*\d{4}(?!\d)$/,
				"Invalid phone number",
			],
		},
		password: {
			type: String,
			required: [true, "password is required!"],
			select: false,
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
