
module.exports.run = (client, message, args, throwex) => {
    var reply = ["Yes", "No", "IDK I'm just a bot", "Ask PrecipitationJS"]
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
    message.reply(`${reply[Math.floor(Math.random () * reply.length)]}`)
}
catch (e) {
throwex(e)
}
}
module.exports.help = {
    name: "ask",
    args: "[question]",
    notes: "Hello Discord, Ask me anything!",
    category: 'Fun'
}
