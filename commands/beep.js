module.exports = {
	name: 'beep',
	description: 'Sends an invite!',
	execute(message, args) {
		message.channel.send('Invite link: https://discord.com/api/oauth2/authorize?client_id=743630959857107036&permissions=8&scope=bot.');
	},
};