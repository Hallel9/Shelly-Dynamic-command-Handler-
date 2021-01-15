	const modelUser = require('../models/users.js')

module.exports = {
	name: 'test1',
  cooldown: 5,
	description: 'Ping!',
	async execute(message, args) {

let user = await modelUser.findOne({ userID: message.author.id });

user.items.remove(args[0] || 'RANT')
//push
await user.save()
message.channel.send('Test Successful! ✅')
	},
};