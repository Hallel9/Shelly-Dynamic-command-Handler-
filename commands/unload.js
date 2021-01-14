module.exports = {
	name: 'unload',
  owneronly: true,
	description: 'unloads a command',
	args: true,
async	execute(message, args) {
  
   const correctemoji = message.client.emojis.cache.get("799137169054629918");
   const wrongmoji = await message.client.emojis.cache.get("799137549176143892");
		const commandName = args[0].toLowerCase();
    if(!commandName) return message.channel.send('error no command given')
const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) {
			return message.channel.send(`${wrongmoji} The command \`${commandName}\` is not loaded use \`.load\` to load it`);
		}

		try {
			
			message.client.commands.delete(command.name);

      message.channel.send(`${correctemoji}  unloaded Command **${commandName}** located at \`commands/${commandName}.js\``)
		} catch (error) {
			console.log(error);
			message.channel.send(`${wrongmoji} There was an error while unloading  command \`${commandName}\`:\n\`${error.message}\``);
		}
	},
};