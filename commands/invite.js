const Discord = require('discord.js');

module.exports = {
	name: 'invite',
	description: 'Sends an invite!',
	execute(message, args) {

    const embed = new Discord.MessageEmbed()
    	.setTitle('Invite me here')
      .setURL('https://discord.com/api/oauth2/authorize?client_id=743630959857107036&permissions=8&scope=bot')
        .setDescription(`${message.author.username} you can [Invite me here](https://discord.com/api/oauth2/authorize?client_id=743630959857107036&permissions=8&scope=bot)`)
				.setColor('RANDOM')

		message.channel.send(embed);
	},
};