const Discord = require('discord.js')
module.exports = {
	name: 'github',
  cooldown: 5,
	description: 'Sends a github link',
	execute(message, args) {
		const embed = new Discord.MessageEmbed()
    	.setTitle('Github Repo')
      .setURL('https://github.com/Hallel9/Shelly-Dynamic-command-Handler-')
        .setDescription(`${message.author.username} you can [check out my code here!](https://github.com/Hallel9/Shelly-Dynamic-command-Handler-)`)
				.setColor('#21ff90')

		message.channel.send(embed);
	}
}