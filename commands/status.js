const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'status',
	owneronly: true,
	description: 'Sets the status of the bot',
	aliases: [],
	execute(message, args) {
		const embed = new MessageEmbed()
			.setAuthor(`${message.client.user.username}`, `${message.client.user.displayAvatarURL()}`)
			.setFooter('Shelly v 0.1')

		const status = args[0]
		const done = message.client.emojis.cache.get('800141665762541568')
		if (!status) return message.channel.send(`\`\`\`Please provide a status, ex :- Online \`\`\``)
		if (message.client.user.presence.status.toLowerCase() == status.toLowerCase()) return message.channel.send(`\`\`\`Client is already in the status ${message.client.user.presence.status.toLowerCase()}\`\`\``)


		if (status.toLowerCase() == 'dnd') {

			message.client.user.setStatus('dnd')
			embed.setDescription(`Status changed to \`Do not disturb\`!`)
			return message.channel.send(embed)
			console.log('Status changed!')


		} else if (status.toLowerCase() == 'online') {

			message.client.user.setStatus('online')
			embed.setDescription(`Status changed to \`Online\`!`)
			return message.channel.send(embed)
		} else if (status.toLowerCase() == 'offline') {
			message.client.user.setStatus('offline')
			embed.setDescription(`Status changed to \`offline\`!`)
			return message.channel.send(embed)
		} else if (status.toLowerCase() == 'idle') {
			message.client.user.setStatus('idle')
			embed.setDescription(`Status changed to \`idle\`!`)
			return message.channel.send(embed);
		} else {

			embed.setDescription(`Please enter a **valid** status type!\n\n**__Avilable-options__**\n\nIdle\noffline\nonline\ndnd(Do not disturb)`)
			return message.channel.send(embed)
		}
		/*
						const content = args.join(" ")
						const splitt = content.split('');
		
						const lol = new MessageEmbed()
						.setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
						.setDescription("<a:error:793709920104480769> Please enter a status type!")
						.setColor(`#131313`)
						if (!splitt[0]) return message.channel.send(lol);
		
		
								if(content === 'dnd') {
										client.user.setStatus('dnd')
										const sux = new MessageEmbed()
												.setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
												.setDescription("<a:success:793761111576018944> Status changed to `do not disturb`!")
												.setColor(`#131313`)
												message.channel.send(sux)
								} else {
										if(content === 'online') {
												client.user.setStatus('online')
												const sux = new MessageEmbed()
												.setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
												.setDescription("<a:success:793761111576018944> Status changed to `online`!")
												.setColor(`#131313`)
												message.channel.send(sux)
										} else {
												if(content === 'idle') {
														client.user.setStatus('idle')
														const sux = new MessageEmbed()
												.setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
												.setDescription("<a:success:793761111576018944> Status changed to `idle`!")
												.setColor(`#131313`)
												message.channel.send(sux)
												} else {
														if(content != ['dnd', 'online', 'idle']) {
																const meh = new MessageEmbed()
																.setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
																.setDescription(`<a:error:793709920104480769> Please enter a **valid** status type!
																**Options:**
																dnd (do not disturb)
																online
																idle`)
																.setColor(`#131313`)
																return message.channel.send(meh)
														} 
											  
										}
								}
						}
						*/

	}
};