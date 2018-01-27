module.exports.run = (client, message, args) => {
const discord = require('discord.js');
let phrase = args.join(" ");
let embed = new discord.RichEmbed()

embed.setTitle("LionBot says...")
embed.setDescription(phrase)
embed.setFooter(`Said by ${message.author.username} at ${new Date()}`, message.author.avatarURL)
embed.setColor("ORANGE")
message.delete()
message.channel.send({ embed })
}
module.exports.help = {
    name: "embedsay",
    args: "[args]",
    notes: `Repeats what you type, but attributes it to you.`,
    category: 'Fun'
}
