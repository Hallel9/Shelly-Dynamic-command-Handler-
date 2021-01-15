const Discord = require('discord.js')

module.exports = {
    name: 'rolelist',
    description: 'Displays a list of all members with a certain role.',
    minArgs: 1,
    expectedArgs: '<role name>',
    execute (message, args, text,){
        let roleCheck = ''
        const role = args.join(' ')
        const roleMembers = message.guild.members.cache.filter(m => {
            if (role === 'everyone') roleCheck = m.roles.cache.get(message.guild.id)
            else roleCheck = m.roles.cache.find(r => r.name.toLowerCase() === role.toLowerCase())
            return roleCheck
        }).map(member => {
            return member.user.tag
        })

        const Embed = new Discord.MessageEmbed()
        .setTitle(`${role} Members List`)
        .setDescription(`\`${roleMembers.join('\n')}\``)
        .setColor('RANDOM')
        message.channel.send(Embed)
    }
}