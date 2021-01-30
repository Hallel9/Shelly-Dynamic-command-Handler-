module.exports = {
name : 'lock',
description : 'Locks a channel for a specific role!',
usage : '%lock @role',
execute (msg, args){

let lockrole = msg.mentions.roles.first()

const embed = new Discord.MessageEmbed()
.setColor('#ff0000')
.setDescription('🔒CHANNEL LOCKED')

msg.channel.updateOverwrite(lockrole, { SEND_MESSAGES: false }, `Overwrite permissions`)

msg.channel.send(embed)
.catch(error => {
    console.log("Oh no! Something went wrong! " + error.message);
});
    
    
  
	}
}