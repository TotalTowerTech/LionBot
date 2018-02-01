
module.exports.run = (client, message, args, throwex) => {
    const Discord = require('discord.js')
    var reply = ["LOL Mate Chill. Excuses coming soon."]
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
try{
    let embed = new Discord.RichEmbed()
        embed.setTitle(`The Excuse Ball has spoken!`)
        embed.setDescription(`${reply[Math.floor(Math.random () * reply.length)]}`)
        message.reply( {embed} )
}
catch (e) {
throwex(e)
}
}
module.exports.help = {
    name: "excuse",
    args: "[question]",
    notes: "Generate an excuse!",
    category: 'Fun'
}
