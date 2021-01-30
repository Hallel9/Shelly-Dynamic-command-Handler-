const Discord = require('discord.js')
const modelUser = require('../models/users.js')
const modelBank = require('../models/bank.js')
module.exports = {
    name: 'balance',
    aliases: ["bal"],
    guildOnly: true,
    description: 'Displays your current balance.',
	async	execute(message, args) {
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
  const fuser = await modelUser.findOne({ userID: member.id})
  let banku = await modelBank.findOne({ userID: member.id });
if(!fuser) {
return message.client.error(message, 'User does not have a level', 'NODATA')
};
if(!banku) {
return message.client.error(message, 'User does not have a account', 'NODATA')
};
let bankm =  parseInt(banku.money)
let um = parseInt(fuser.money)
const net =  um + bankm

const embed = new Discord.MessageEmbed()
	.setTitle(`${member.username}'s Balance `)
	.setDescription(`**Wallet:** ${fuser.money}\n**Bank:** ${banku.money} / ${banku.max}\n**Net worth:** ${net}`)

return message.channel.send(embed)
    }
}