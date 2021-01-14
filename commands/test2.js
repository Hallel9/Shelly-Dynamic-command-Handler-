module.exports = {
	name: 'test1',
  cooldown: 5,
	description: 'Ping!',
	execute(message, args) {
		message.channel.send('this is test2');
	},
};