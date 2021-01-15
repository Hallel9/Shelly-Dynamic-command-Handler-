module.exports = {
    name: 'warn',
    description: 'warns a members!',
    execute(message, args) {
        


        const role = (message.member.roles.cache.some(r => r.name === "Staff"))
        const user = message.mentions.users.first();
        const ree = args.slice(1).join(" ")
        const emoji = (':ohmy: ')
        var fname = message.mentions.users.first().username;
        if (!role)  return message.reply('you cant use this ', emoji)
        else if (!user) return message.reply('who do u wanna warn', emoji)
        else if (!ree) return message.reply('why are they being warned?')
         

         user.send('you were warned inn waffles nation for ' + ree+ emoji )
        message.channel.send(fname + ' was has been warned for  ' + ree + emoji)
    }
};