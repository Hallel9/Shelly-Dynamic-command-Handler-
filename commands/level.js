const modelUser = require('../models/users.js')
const { MessageAttachment } = require("discord.js");
const canvacord = require("canvacord");
module.exports = {
	name: 'level',
  cooldown: 5,
	description: 'Ping!',
	async execute(message, args) {
  let member = message.mentions.users.first() || message.author;
  let user = await modelUser.findOne({ userID: member.id });

if(!user) {
return message.client.error(message, 'User does not have a level', 'NODATA')
};
const rank = new canvacord.Rank()
    .setCurrentXP(user.points)
    .setRequiredXP(user.npoints)
    .setStatus("dnd")
    .setProgressBar("#FFFFFF", "COLOR")
    .setUsername(member.username)
    .setDiscriminator(member.discriminator)
    .setAvatar(member.displayAvatarURL({ format: "png", size: 1024 }));

  const img = await rank.build();
  const at = new MessageAttachment(img, "rank.png")
  return message.channel.send(at);
//message.channel.send(`your level is ${user.level} - points - ${user.points}`)
	},
};