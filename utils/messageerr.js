async function error(message, error, code) {

message.channel.send(`\`\`\`Error - ${code} - ${error}\`\`\``)
}




module.exports = error