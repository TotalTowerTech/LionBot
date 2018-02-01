module.exports.run = (client, message, args, throwex) => {
const discord = require('discord.js');
let suggestion = args.join(" ");
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
if (suggestion.length == 0){
  message.reply("If you have nothing to suggest why did you run the command?")
} else{
  let embed = new discord.RichEmbed()
  embed.setTitle("New Suggestion!")
  embed.setDescription(suggestion)
  embed.setFooter(`Suggested by ${message.author.username} at ${new Date()}`, message.author.avatarURL)
  embed.setColor("ORANGE")
  message.delete()
  message.guild.channels.find("name", "suggestions").send({ embed })
}
}
catch (e) {
  throwex(e)
}

}


module.exports.help = {
    name: "suggest",
    args: "[args]",
    notes: `Makes a suggestion for the current guild.`,
    category: 'Moderation'
}
