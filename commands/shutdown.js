module.exports = {
    name: 'shutdown',
    owneronly: true,
		description: 'shutsdown the bot',
    aliases: [],
  async execute (message, args) {
const option = args[0]

if(option) {
  if(option.toLowerCase() == 'yes') {
    message.channel.send(`\`\`\`Bot will shutdown in 3 seconds\`\`\``)

    setTimeout(async function(){
    await message.channel.send(`\`\`\`Full shutdown started by ${message.author.username}\`\`\``)
    await message.client.destroy();
    process.exit();
    }, 3000);
  
  } else if(option.toLowerCase() == 'no' || option.toLowerCase() == 'cancel'){
    return message.channel.send(`\`\`\`Full shutdown aborted\`\`\``)
  } else {
    return message.channel.send(`\`\`\`Invalid options were provided\nValid options are :- yes, no, cancel\`\`\``)
  }
} else {
 await message.channel.send(`\`\`\`The bot will now shut down, Confirm by sending yes or deny by sending no\`\`\``)

 await message.channel.awaitMessages(m => m.author.id == message.author.id,
                            {max: 1, time: 30000}).then(async collected => {
  if (collected.first().content.toLowerCase() == 'yes') {
await message.channel.send(`\`\`\`Bot will shutdown in 3 seconds\`\`\``).then(msg => msg.delete({ timeout: 10000 }))

  setTimeout(async function(){
    await message.channel.send(`\`\`\`Full shutdown started by ${message.author.username}\`\`\``).then(msg => msg.delete({ timeout: 6000 }))
    await message.client.destroy();
    process.exit();
    }, 3000);

} else if(collected.first().content.toLowerCase() == 'no'){
  return message.channel.send(`\`\`\`Full shutdown aborted\`\`\``);      
} else {
  return message.channel.send(`\`\`\`Full shutdown aborted\nNo valid options were provided\`\`\``);  
}
                      }).catch(err => {
                        message.channel.send(`\`\`\`Full shutdown aborted\nDid not receive a message During the 30s\`\`\``)
                      });
		}
	}
};
/*   message.reply('The bot will now shut down.\n'
                            + 'Confirm with `yes` or deny with `no`.');

    
message.channel.awaitMessages(m => m.author.id == message.author.id,
                            {max: 1, time: 30000}).then(collected => {
                                    // only accept messages by the user who sent the command
                                    // accept only 1 message, and return the promise after 30000ms = 30s

                                    // first (and, in this case, only) message of the collection
                      if (collected.first().content.toLowerCase() == 'yes') {
                                            message.reply('Shutting down...');
                                            client.destroy();
                                    }

                                    else
                                            message.reply('Operation canceled.');      
                            })


                            */