const { MessageAttachment } = require("discord.js");
const modelBank = require('../models/bank.js')
const Discord = require('discord.js');
const modelUser = require('../models/users.js')
const message = require('discord.js')
const member = require('discord.js')

module.exports = {
	name: 'deposite',
  cooldown: 5,
	description: 'view yours or someone\'s profile',
	async execute(message, args) {
  let user = await modelUser.findOne({ userID: message.author.id });
  let banku = await modelBank.findOne({ userID: message.author.id });
  const moneyem = message.client.emojis.cache.get('800233785001902080')
  const pointlem = message.client.emojis.cache.get('800235572995293224')
  const levelem = message.client.emojis.cache.get('800236224623280148')
if(!user) {
 return message.client.error(message, 'user does not any related data in our database', 'NODATA')
};
if(!banku) {
  return message.client.error(message, 'User does not any related data in our database', 'NODATA')
}
const value = args[0]
const bankmax = banku.max
const bankmoney = banku.money
const usermoney = user.money


if(!value) {
return message.channel.send('Please give me a value to deposite')
}


if(bankmoney > bankmax) {
  return message.channel.send(`bank storage is full, level up to gain more space`)
}



if(isNaN(value) && value == 'max'){
banku.money = usermoney + bankmoney
await banku.save();
user.money = usermoney - usermoney
} else if(value > usermoney) {
  return message.channel.send(`You do not have that much money to deposite`)
} else if(!isNaN(value) && value < usermoney){

}


const at = new Discord.MessageEmbed()
.setTitle(`**${member.username}'s** profile`)
.setDescription(``)
  return message.channel.send(at);
//message.channel.send(`your level is ${user.level} - points - ${user.points}`)
	},
};