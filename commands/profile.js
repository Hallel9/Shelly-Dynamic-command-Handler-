const { MessageAttachment } = require("discord.js");
const modelBank = require('../models/bank.js')
const Discord = require('discord.js');
const modelUser = require('../models/users.js')

module.exports = {
	name: 'profile',
  aliases: ["p"],
  cooldown: 5,
	description: 'view yours or someone\'s profile',
	async execute(message, args) {
  let member = message.mentions.users.first() || message.author;
if(!message.mentions.users.first() && args[0]) {

member = message.client.users.cache.get(args[0])
if(!member) {
member = message.client.users.fetch(args[0]).catch(err => { 
  error = `Member With Id - "${args[0]}" Was Not found`
  message.client.error(message, error, '404')

})
 //return message.channel.send(`\`\`\`Error: 404 - Member With Id - "${args[0]}" Was Not found\`\`\``)
}
}
if(member.bot) return message.channel.send(`\`\`\`Error - Bot - User ${member.username} is a bot\`\`\``)

  let user = await modelUser.findOne({ userID:member.id });
  let banku = await modelBank.findOne({ userID: member.id });
  const moneyem = message.client.emojis.cache.get('801449990299844608')
  const pointlem = message.client.emojis.cache.get('801450287659221012')
  const levelem = message.client.emojis.cache.get('801450441585197126')
if(!user) {
 return message.client.error(message, 'user does not any related data in our database', 'NODATA')
};
if(!banku) {
  return message.client.error(message, 'User does not any related data in our database', 'NODATA')
}
const item = user.items.map(it => it).join(', ') || 'None'
const at = new Discord.MessageEmbed()
.setTitle(`**${member.username}'s** profile`)
.setDescription(`**__GENERAL__**\n\n ${moneyem} Money(Wallet): ${user.money}\n${levelem} Level: ${user.level}\n${pointlem} points: ${user.points}\nItems: ${item}\n\n**__BANK__**\n\nMoney(in bank) : ${banku.money}\nMax depositable value: ${banku.max}`)
  return message.channel.send(at);
//message.channel.send(`your level is ${user.level} - points - ${user.points}`)
	},
};