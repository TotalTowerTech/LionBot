
module.exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    var reply = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good"]
    let embed = new Discord.RichEmbed()
        embed.setTitle(` **:8ball: The 8 Ball has spoken!**`)
        embed.addField("Question", (`${args.join(" ")}`))
        embed.addField("Answer", (`${reply[Math.floor(Math.random () * reply.length)]}`))
        embed.setColor("WHITE")
        message.reply( {embed} )
}

module.exports.help = {
    name: "8ball",
    args: "[question]",
    notes: "Let the virtual 8ball tell you.",
    category: 'Fun'
}
