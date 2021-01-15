const Discord = require('discord.js');
const client = new Discord.Client({ ws: { properties: { $browser: "Discord Android" }} });
const keepalive = require('./server.js');
const fs = require('fs');
const prefix = '%'
const ownerids = ["241632903258177536", "645592347475836949"]
const mongo = require("./mongo.js")


// Database =>
const modelUser = require('./models/users.js')
const modelBank = require('./models/bank.js')
const modelShop = require('./models/shop.js')
const modelBoost = require('./models/boosters.js')

const cooldowns = new Discord.Collection();

client.commands = new Discord.Collection();
client.error = require('./utils/messageerr.js')

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}





client.once('ready', async () => {
  await mongo().then(mongoose => {
    console.log('MongoDb : database is Online')
  })
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
if(message.author.bot) return;
if (!message.content.startsWith(prefix)) {

let bankUser = await modelBank.findOne({ userID: message.author.id });

// get user from user model
let user = await modelUser.findOne({ userID: message.author.id });

if(!bankUser) {
 let newBank = new modelBank({
      userID: message.author.id,
      money: 0,
      max: 500,
    });
    // save the new bank user
await newBank.save().catch((err) => console.error(err));
// then find the new bank user
bankUser = await modelBank.findOne({ userID: message.author.id });
};

// if the user is not in the db
if(!user) {
  let newUser = new modelUser({
      userID: message.author.id,
      money: 0,
      items: [],
      level: 0,
      points: 0,
      boosts: [],
      npoints: 500
    });
  await newUser.save().catch((err) => console.error(err));
user = await modelUser.findOne({ userID: message.author.id });
};

user.points = user.points + 1
 await user.save()

if(user.npoints < user.points) {
user.npoints = user.npoints + 500;
user.level = user.level + 1
user.money = user.money + 200
return await user.save();
}

}

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

  
});





keepalive();
client.login(process.env.TOKEN)