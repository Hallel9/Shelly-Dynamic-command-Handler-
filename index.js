const Discord = require('discord.js');
const client = new Discord.Client();
const keepalive = require('./server.js');
const fs = require('fs');
const prefix = '%'
const ownerids = ["241632903258177536", "645592347475836949"]

const cooldowns = new Discord.Collection();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log('Ready!');
  let botstatus = fs.readFileSync('./bot-status.json');
  botstatus = JSON.parse(botstatus);
  if (botstatus.activity == 'false') return;
  if (botstatus.activitytype == 'STREAMING') {
    client.user.setActivity(botstatus.activitytext, {
      type: botstatus.activitytype,
      url: botstatus.activityurl
    });
    } else {
    client.user.setActivity(botstatus.activitytext, {
      type: botstatus.activitytype
    })
  }
});


// message event =>

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
const commandName = args.shift().toLowerCase();
  const wrongmoji = await message.client.emojis.cache.get("799137549176143892");
const command = client.commands.get(commandName)
	|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

if (!command) return;


 if(command.owneronly) {
   if(!ownerids.includes(message.author.id)){
     message.react(wrongmoji)
     return;
   }
 }

	if (command.args && !args.length) {

		let reply = `You didn't provide any arguments, ${message.author}!`;

	if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
	}
	return message.channel.send(reply);
	}

   if (command.permissions) {
	const authorPerms = message.channel.permissionsFor(message.author);
 	if (!authorPerms || !authorPerms.has(command.permissions)) {
 		return message.reply('You Do not have permission to do this');
	}
 }

if (!cooldowns.has(command.name)) {
	cooldowns.set(command.name, new Discord.Collection());
}

const now = Date.now();
const timestamps = cooldowns.get(command.name);
const cooldownAmount = (command.cooldown || 3) * 1000;

if (timestamps.has(message.author.id)) {
	const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

	if (now < expirationTime) {
		const timeLeft = (expirationTime - now) / 1000;
		return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
	}

}

timestamps.set(message.author.id, now);
setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
try {
command.execute(message, args);

	} catch (error) {
	console.error(error);
	message.reply(`${wrongmoji} there was an error trying to execute that command!`);
}

/*
	if (command === 'ping') {
		message.channel.send('Pong');
	} else if (command === 'beep') {
		message.channel.send('Boop.');
	} else if
  (command === 'invite') {
    message.channel.send('invite link: https://discord.com/api/oauth2/authorize?client_id=743630959857107036&permissions=8&scope=bot')
  }*/

});






keepalive();
client.login(process.env.TOKEN)