const Discord = require('discord.js')
const modelUser = require('../models/users.js')
module.exports = {
    name: 'balance',
    guildOnly: true,
    description: 'Sets you as AFK',
		execute(message, args) {
    let member = message.mentions.users.first() || message.author;
if(!message.mentions.users.first() && args[0]) {

member = message.client.users.cache.get(args[0])
if(!member) {
member = message.client.users.fetch(args[0]).catch(err => { 
  error = `Member With Id - "${args[0]}" Was Not found`
  message.client.error(message, error, '404')

})

}
}
if(member.bot) return message.channel.send(`\`\`\`Error - Bot - User ${member.username} is a bot\`\`\``)
  const fuser = modelUser.findOne({ userID: member.id})

    }
}