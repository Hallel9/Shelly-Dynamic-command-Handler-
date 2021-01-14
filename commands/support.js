const Discord = require('discord.js');

module.exports = {
	name: 'support',
	description: 'Sends an invite to our support server!',
	execute(message, args) {

    const embed = new Discord.MessageEmbed()
    	.setTitle('Get support here!')
      .setURL('https://discord.gg/uVV4rFBbAp')
        .setDescription(`${message.author.username} you can get [Support here](https://discord.gg/uVV4rFBbAp)`)
				.setColor('RANDOM')

		message.channel.send(embed);
	},
};