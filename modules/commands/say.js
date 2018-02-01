module.exports.run = (client, message, args, throwex) => {
    var wowzers = args.join(" ");
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
    try {
        if (message.author.id == "299314446428274689") {
            message.delete();
            return message.channel.send(wowzers);
        }
        else {
            return message.reply("Ew! I will *NOT* say that!");
        }
    } catch (e) {
    throwex(e)
    }
    }

module.exports.help = {
    name: "say",
    args: "[args]",
    notes: `Repeats what you type.`,
    category: 'Owner Only'
}
