module.exports = {
  name: 'give',
  description: 'Gives a cookie',
  execute(message, args) { // Using WOKCommands
    const { channel, mentions } = message;
    const target = mentions.members.first();

    if (!target) {
      return message.delete().then(() => {
        channel.send(`Please specify someone to give a cookie to`);
      });
    } else {
      const cookieOptions = [
        `Hey, ${target}. You just got a cookie from ${message.author}! [🍪]`,
        `Hey, ${target}. You just got a cookie (and a secret hot chocolate) from ${message.author}! [🍪☕]`,
        `Hey, ${target}. You just got a cookie (+1 secret cookie) from ${message.author}! [🍪🍪]`,
      ];

      const RCC = Math.floor(Math.random() * cookieOptions.length);

       message.delete().then(() => {
        channel.send(cookieOptions[RCC]);
      });
    }
  },
};
