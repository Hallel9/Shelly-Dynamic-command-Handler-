const { MessageEmbed } = require('discord.js')
const { MessageAttachment } = require('discord.js')
module.exports = {
    requiredPermissions: ['ADMINISTRATOR'],
    name: 'msg',
		description: 'Changes your message to an embed',
    execute(message,args,text)  {
        if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send(new MessageEmbed()
        .setColor('#ff2400')
        .setAuthor('🧙 ERROR')
        .setThumbnail('https://i.imgur.com/IG8G9ZR.png')
        .setDescription(`You can't do it.`))
        
        let letter = args.join(' ')
        
            const attachment = message.attachments.first()
            if (!attachment) {
                message.channel.send(new MessageEmbed()
                .setDescription(`${letter}`)
                .setColor('#f0e7e7')
            )
            
            } else {
                message.channel.send(new MessageEmbed()
								.setTitle('Message Embed Edit')
                .setDescription(`${letter}`)
                .setColor('RANDOM')
                .setImage(attachment.url)
            )
            
            }
            
            
        

    }
}