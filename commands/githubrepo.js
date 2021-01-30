module.exports = {
	name: 'github',
  cooldown: 5,
	description: 'Sends a github link',
	execute(message, args) {
		const embed = new Discord.MessageEmbed()
    	.setTitle('Github Repo')
      .setURL('https://discord.com/api/oauth2/authorize?client_id=801842822172246066&permissions=8&scope=bot')
        .setDescription(`${message.author.username} you can [check out my code here!](https://discord.com/api/oauth2/authorize?client_id=801842822172246066&permissions=8&scope=bot)`)
				.setColor('#21ff90')

		message.channel.send(embed);
}