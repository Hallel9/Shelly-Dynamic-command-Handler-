module.exports = {
	name: 'beep',
	description: 'Responds with "Boop!"',
	execute(message, args) {
		message.channel.send('Boop!');
	},
};