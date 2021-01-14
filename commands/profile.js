
const { MessageAttachment } = require("discord.js");
const modelBank = require('../models/bank.js')
const Discord = require('discord.js');


module.exports = {
	name: 'profile',
  cooldown: 5,
	description: 'Ping!',
	async execute(message, args) {
  let member = message.mentions.users.first() || message.author;
  let user = await modelUser.findOne({ userID:member.id });
  let banku = await modelBank.findOne({ userID: member.id });
  const moneyem = message.client.emojis.cache.get('799214673160306728')
  const levelem = message.client.emojis.cache.get('799216651357650945')
if(!user) {
  newUser = new modelUser({
      userID: member.id,
      money: 0,
      items: [],
      level: 0,
      points: 0,
      boosts: [],
      npoints: 0
    });
return await newUser.save().catch((err) => console.error(err));
};
if(!banku) {
 let newBank = new modelBank({
      userID: message.author.id,
      money: 0,
      max: 500,
    });
  return await newBank.save().catch((err) => console.error(err));

}
const item = user.items.map(it => it).join(', ') || 'None'
const at = new Discord.MessageEmbed()
.setTitle(`${member.username}'s profile'`)
.setDescription(`**__GENERAL__**\n\n ${moneyem} Money(Wallet): ${user.money}\n${levelem} Level: ${user.level}\npoints: ${user.points}\nItems: ${item}\n\n**__BANK__**\n\nMoney(in bank) : ${banku.money}\nMax depositable value: ${banku.max}`)
  return message.channel.send(at);
//message.channel.send(`your level is ${user.level} - points - ${user.points}`)
	},
};