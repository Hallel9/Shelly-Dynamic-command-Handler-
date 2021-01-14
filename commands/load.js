module.exports = {
	name: 'load',
  owneronly: true,
	description: 'loads a command',
	args: true,
async	execute(message, args) {

   const correctemoji = message.client.emojis.cache.get("799137169054629918");
   const wrongmoji = await message.client.emojis.cache.get("799137549176143892");
		const commandName = args[0].toLowerCase();
const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (command) {
			return message.channel.send(`${wrongmoji} The command \`${commandName}\` is already loaded use \`%reload\` instead`);
		}

		try {
const oldCommand = require(`./${commandName}.js`);
      delete require.cache[require.resolve(`../commands/${oldCommand.name}.js`)];
			const newCommand = require(`./${commandName}.js`);
			message.client.commands.set(newCommand.name, newCommand);

      message.channel.send(`${correctemoji}  loaded Command **${commandName}** located at \`commands/${commandName}.js\``)
		} catch (error) {
			console.log(error);
			message.channel.send(`${wrongmoji} There was an error while loading  command \`${commandName}\`:\n\`${error.message}\``);
		}
	},
};