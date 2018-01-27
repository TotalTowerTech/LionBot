
module.exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    var reply = ["LOL Mate Chill. Excuses coming soon."]
    let embed = new Discord.RichEmbed()
        embed.setTitle(`The Excuse Ball has spoken!`)
        embed.setDescription(`${reply[Math.floor(Math.random () * reply.length)]}`)
        message.reply( {embed} )
}

module.exports.help = {
    name: "excuse",
    args: "[question]",
    notes: "Generate an excuse!",
    category: 'Fun'
}
