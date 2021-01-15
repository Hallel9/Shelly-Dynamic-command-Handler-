const ms = require("ms")
const Discord = require("discord.js")

module.exports = {
    name :"tempban",
		description: 'Currently unavailable',
		 execute(message, args) {
        if(message.author.bot || !message.guild) return 
        if(!message.member.permissions.has("ADMINISTRATOR") || !message.member.permissions.has("BAN_MEMBERS")) return message.channel.send(`You do not have access to this command!`)
        
        const target = message.mentions.members.first()
        if(!target) return message.reply("@ the person you want to temp ban!")

        const time = args[1]
        if(!time) return message.reply("For how long would you like to ban this person for - `s for seconds, m for minutes, h for hours or d for days`?")

        let reason = args.slice(2).join(" ")
        if(!reason) {
            reason = "No reason specified!"
        }

        try {
            target.ban ({
                reason: reason
            })
            message.channel.send(":white_check_mark:")
        } catch(err) {
            console.log(err)
            message.channel.send(":x: There was an error! - " + err)
        }
        setTimeout(function() {
            message.guild.members.unban(target, reason)
        }, ms(time))
        
    }
}