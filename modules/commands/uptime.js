module.exports.run = (client, message, args, throwex) => {
    const Discord = require('discord.js')
    let uptimeData = client.uptime;
    var minutes = Math.round((uptimeData / 1000 / 60) % 60);
    var hours = Math.round((minutes / 60) % 60);
    var days = Math.round((hours / 24) % 24);
    var outputStuffs = `I have been up for exactly ${hours} hours and ${minutes} minutes. That is ${days} days.`;
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
    embed.setColor('ORANGE')
    embed.setTitle("Uptime :clock1:")
    embed.setDescription("I mean, I'm up almost 24/7 thanks to FloppyDiskDrive, but here ya go!")
    embed.addField(outputStuffs, "rawr c:")
    message.channel.send({ embed });
  }
  catch (e){
  	throwex(e)
}
}

  module.exports.help = {
    name: 'uptime',
    args: '[none]',
    notes: 'Tells you how long I have been awake.',
    category: 'Basic'
}
