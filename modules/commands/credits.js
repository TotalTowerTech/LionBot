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
try{
  let embed = new Discord.RichEmbed()
embed.setColor("ORANGE")
embed.setTitle("**Credits**")
embed.setDescription("*Thank you all c:*")
embed.addField('Creator', "ServerLion")
embed.addField('Handler', "FloppyDiskDrive")
embed.addField('Help Command', "Jtsshieh")
embed.addField('As well as', "all those that helped me through the code in little ways.")
message.channel.send({ embed })
}
catch (e) {
throwex(e)
}
}
module.exports.help = {
    name: "credits",
    args: "none",
    notes: `Tells you about the amazing people who built me`,
    category: 'Basic'
}
