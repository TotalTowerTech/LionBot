module.exports.run = (client, message, args, throwex, guild, member, user) => {
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
  let person = message.guild.member(message.mentions.users.first());
  if (person == null) return message.reply("No one was mentioned.");
  let embed = new Discord.RichEmbed()
    .setTitle("User Information Lookup")
    .setDescription("Very Interesting...")
    .addField("Username", (person.user.tag), true)
    .addField("Display Name", (person.displayName), true)
    .addField("Highest Role", (person.highestRole), true)
    .addField("Current Voice Channel", (person.voiceChannel), true)
    .addField("Joined Discord On", (person.user.createdAt))
    .addField("Joined Guild On", (person.joinedAt))
    .setThumbnail(person.user.avatarURL)

  message.channel.send( {embed} )
}
catch (e) {
throwex(e)
}
}

module.exports.help = {
    name: 'uinfo',
    args: '[args]',
    notes: 'stuff',
    category: 'Basic'
}
