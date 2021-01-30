module.exports = {
	name: 'reload',
  args: true,
  owneronly: true,
	description: 'Reloads a command',
	execute(message, args) {
	const correctemoji = message.client.emojis.cache.get("801454895370076190");
   const wrongemoji =  message.client.emojis.cache.get("801454885635358771");
const commandName = args[0].toLowerCase();
const command = message.client.commands.get(commandName)
	|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

if (!command) return message.channel.send(`${correctemoji}There is no command with name or alias \`${commandName}\`, ${message.author}!`);

delete require.cache[require.resolve(`./${command.name}.js`)];

try {
	const newCommand = require(`./${command.name}.js`);
	message.client.commands.set(newCommand.name, newCommand);
  message.channel.send(`${correctemoji} Done reloaded command ${command.name}`)
} catch (error) {
	console.error(error);
	message.channel.send(`${wrongemoji} There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
}
	},
};