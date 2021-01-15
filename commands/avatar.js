const { MessageEmbed } = require('discord.js');

module.exports = {
	name:'avatar',
	description:'Shows the pfp of the mentioned user.',
	aliases:['pp', 'pfp'],
async execute(message, args) {
    if(args[0]){
        if(args[0] === 'random'){
          let member = message.guild.members.cache.random();
        const msg = await message.reply(`Searching for a random avatar...`);
        message.channel.send(new MessageEmbed()
        .setColor(0x7289DA)
        .setDescription(`Asked by ${message.author.tag}.`)
        .setImage(member.user.displayAvatarURL({dynamic: true, size:4096})));
        msg.edit(`${message.author}, Here's ${member.user.tag}'s avatar !`);
        
        } else {
            const user = message.mentions.users.first();
            if(!user){
            return message.reply('This member doesn\'t exist!');
        };
        const msg = await message.reply(`Searching for ${user}'s avatar...`);
        message.channel.send(new MessageEmbed()
            .setColor(0x7289DA)
            .setDescription(`Asked by ${message.author.tag}.`)
            .setImage(user.displayAvatarURL({dynamic: true, size:4096})));
             msg.edit(`${message.author}, Here's ${user.tag}'s avatar! `);
            
        };
        

     }  else  {
        const wait = await message.reply('Searching for your avatar...');
        message.channel.send(new MessageEmbed()
        .setColor(0x7289DA)
        .setImage(message.author.displayAvatarURL({dynamic: true, size: 4096})));
        wait.edit(`${message.author}, Here's your avatar !`)
    };

}
};