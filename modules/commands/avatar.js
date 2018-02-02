module.exports.run = (client, message, args) => {
    const Discord = require('discord.js')
		   if (message.channel.type === "dm") return message.channel.send(":x: *This command is not avaible in DMs.*");
            if (message.mentions.users.first()) {
            	var mentionmembers = message.mentions.members.first()
            	var mentionusers = message.mentions.users.first()
                   message.channel.send(mentionusers.displayAvatarURL)
            } else {
                message.channel.send(message.author.displayAvatarURL)
            }
}

module.exports.help = {
    name: "avatar",
    args: "none",
    notes: "I will give you your avatar or someone else",
    category: 'Fun'
}
