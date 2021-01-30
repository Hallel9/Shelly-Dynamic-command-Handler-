const { MessageEmbed } = require('discord.js');
const modelUser = require('../models/users.js')
module.exports = {
    name: 'epoints',
    owneronly: true,
		description: 'Gives the user the requested amount of points',
    aliases: [],
    async execute (message, args) {
      const user = message.mentions.users.first() || message.client.users.get(args[0]) || mesaage.client.users.fetch(args[0])
    if(!user) {
    return message.channel.send('please give me a user')
  }
  let fu = await modelUser.findOne({ userID:user.id });

if(!fu) {
return message.client.error(message, 'User does not have a level', 'NODATA')
};

 const option = args[1]
 const value = args[2]

 if(!option) {
   return message.channel.send('please give me a options')


 
}


 if(!value) {
   return message.channel.send('please give me a value')


 
}



 if(isNaN(value)) {
   return message.channel.send('please give me a number for a value')


 
}

if(value < 0) {
  return message.channel.send('number must be higher that 0')
}

const v = parseInt(value) 

if(option.toLowerCase() == 'give') {
 message.channel.send(`Gave the user ${v} the user had ${fu.points} now they have ${fu.points + v}`)
 
fu.points = fu.points + v;
return await fu.save();



} else if(option.toLowerCase() == 'remove') {
 message.channel.send(`removed ${value} from the user, the user had ${fu.points} now he has ${fu.points - v}`)
  fu.points = fu.points - v;
return await fu.save();


}

    }
}