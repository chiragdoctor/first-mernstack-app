const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
	},
	age: {
		type: Number,
	},
	gender: {
		type: String,
	},
	email: {
		type: String,
	},
	languages: {
		type: Array,
	},
	date: {
		type: Date,
	},
	password: {
		type: String,
	},
	homepage: {
		type: String,
	},
});

module.exports = model('user', UserSchema, 'users');
