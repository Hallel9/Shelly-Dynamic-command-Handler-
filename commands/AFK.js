const Discord = require('discord.js')

module.exports = {
    name: 'AFK',
    guildOnly: true,
    description: 'Sets you as AFK',
		execute(message, args) {
        if (!message.member.displayName.includes('[AFK]')) {
            const nicknameArgs = message.member.displayName
            message.member.setNickname(`[AFK] ${nicknameArgs}`).catch(err => message.reply('I cannot change your nickname! Please check my permissions.'))
        } else {
            const nickname = message.member.displayName.split(' ').slice(1).join(' ')
            message.member.setNickname(nickname).catch(err => message.reply('I cannot change your nickname! Please check my permissions.'))
        }
    }
}