const Discord = require('discord.js');

module.exports = {
    name: "userinfo",
    description: 'Displays Info about the mentioned user',
    execute (message, args,) {

        const guild = message.guild;
    const usr = message.mentions.users.first() || message.author
  
    const memberob = guild.members.cache.get(usr.id) 

    const usero = memberob.user; 

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${usr.tag}`, `${usr.displayAvatarURL({dynamic: true})}`)
    .setThumbnail(`${usr.displayAvatarURL({dynamic: true})}`)
    .setDescription(`${usr}'s Information`)
    .addField(`**ID:**`, `${usr.id}`)
    .addField(`**Avatar URL:**`, `${usr.displayAvatarURL({dynamic: true})}`)
    .addField(`**Nickname (If Applicable):**`, `${memberob.nickname || `**Cannot Find A Nickname For This User**`}`)
    .addField(`**Joined Server:**`, `${memberob.joinedAt}`)
    .addField(`**Joined Discord:**`, `${usr.createdAt}`)
    .setColor('RANDOM')
    message.channel.send(embed);
 }
}