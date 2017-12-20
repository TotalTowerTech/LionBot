module.exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    let uptimeData = client.uptime;
    let minutes = Math.round((uptimeData / 1000 / 60) % 60);
    let hours = Math.round((minutes / 60) % 60);
    let days = Math.round((hours / 24) % 24);

    let embed = new Discord.RichEmbed()
    embed.setTitle("Uptime :clock1:")
    embed.setDescription("I mean, I'm up almost 24/7 thanks to FloppyDiskDrive, but here ya go!")
    embed.addField(":clock1:", (`I have been up for exactly {hours} hours and {minutes} minutes. That's {days} days.`))
    message.channel.send({ embed })
  }

  module.exports.help = {
    name: 'uptime',
    args: '[none]',
    notes: 'Tells you how long I have been awake.',
    category: 'Basic'
}
