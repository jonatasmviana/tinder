const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {

	async getDevByUserName(req, res) {
		const { user } = req.headers;
		const loggedDev = await Dev.findOne({ user });

		const users = await Dev.find({
			$and: [
				{ _id: { $ne: loggedDev._id } },
				{ _id: { $nin: loggedDev.likes } },
				{ _id: { $nin: loggedDev.dislikes } },
			],
		});

		return res.json(users);
	},

	async getDevById(req, res) {
		const { devId } = req.params;
		const loggedDev = await Dev.findById(devId);

		const users = await Dev.find({
			$and: [
				{ _id: { $ne: devId } },
				{ _id: { $nin: loggedDev.likes } },
				{ _id: { $nin: loggedDev.dislikes } },
			],
		});

		return res.json(users);
	},

	async getAllDevs(req, res) {
		const { user } = req.headers;
		const users = await Dev.find({
			$and: [
				{ _id: { $ne: user } }
			]
		});

		return res.json(users);
	},

	async store(req, res) {

		const { username } = req.body;

		const userExists = await Dev.findOne({ user: username });

		if (userExists)
			return res.json(userExists);

		const response = await axios.get(`https://api.github.com/users/${username}`);

		const { name, bio, avatar_url: avatar } = response.data;

		const dev = await Dev.create({
			name,
			user: username,
			bio,
			avatar
		});

		return res.json(dev);
	}
};