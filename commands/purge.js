const Discord = require('discord.js');

module.exports = {
  name: "purge",
  description: "Purges Messages",
  execute(message, args) {
    if (message.member.hasPermission('MANAGE_MESSAGES')) {
 		    let amount = Number(`${args[0]}`);
    if (!amount) {
        message.reply(`I need a number `).catch((error) => console.log(error));
        return;
    }
    (message.channel.bulkDelete(+amount).catch(error => console.log(error)))
		message.channel.send(`I have successfully purged ${amount} messages!`)
    } else {
    message.channel.send('You Cannot use that')};
	}
};