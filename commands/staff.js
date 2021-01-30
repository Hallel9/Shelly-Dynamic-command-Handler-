const Discord = require('discord.js')
module.exports = {
	name: 'staff',
	description: 'Reloads a command',

	async execute (message) {
		let admins = await message.guild.members.cache.filter((m) => m.hasPermission("ADMINISTRATOR") && !m.user.bot).map(x => "<@!" + x.user.id + ">");
      console.log(admins)
      // Get everyone who has MANAGE_MESSAGES Permission but not ADMINISTRATOR Permission
      let mods = await message.guild.members.cache.filter((m) => m.hasPermission("MANAGE_MESSAGES") && !m.user.bot && !admins.includes(`<@!${m.user.id}>`)).map(x => "<@!" + x.user.id + ">");
      console.log(mods)
      console.log(admins)
      // Set up the embed
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.guild.name + " Staff team", message.guild.iconURL())
      .setColor('RANDOM')

      // Check if admins or mods is less than one else join them together
      let adminText = (admins.length < 1) ? "None" : admins.join('\n');
      let modText = (mods.length < 1) ? "None" : mods.join('\n');
      embed.setDescription(`**Admins:**\n` + adminText + "\n**Mods:**\n" + modText)
      return message.channel.send(embed); // Send embed with admins and mods

	}
	
}