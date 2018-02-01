
module.exports.run = (client, message, args, throwex) => {
    const Discord = require('discord.js')
    function throwex(e) {
        var embedTitle = ["I got it... I got it... nope, I didn't get it.", "This bot is about as stable as Trump's Twitter.", "The error is a lie", "Got it! Take that, Precipitation!"];
        let embed = new Discord.RichEmbed()
            .setTitle(embedTitle[Math.floor(Math.random() * embedTitle.length)])
            .addField("Error Details", e)
            .setFooter("The error that was thrown has been logged to the console.")
            .setColor("RED")
        message.channel.send({ embed });
        console.log(e);
    };
    var reply = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good"]
try{
    let embed = new Discord.RichEmbed()
        embed.setTitle(` **:8ball: The 8 Ball has spoken!**`)
        embed.addField("Question", (`${args.join(" ")}`))
        embed.addField("Answer", (`${reply[Math.floor(Math.random () * reply.length)]}`))
        embed.setColor("WHITE")
        message.reply( {embed} )
}
catch (e) {
throwex(e)
}
}
module.exports.help = {
    name: "8ball",
    args: "[question]",
    notes: "Let the virtual 8ball tell you.",
    category: 'Fun'
}
