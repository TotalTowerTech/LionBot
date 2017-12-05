module.exports.run = (client, message) => {
	const Discord = require('discord.js');
  let embed = new Discord.RichEmbed()
  message.reply('Right now this is a private bot. Only Mr.Serverlion can use the invite link. However, anyone can use the server link.')
  embed.setTitle("Join the Lionbot family")
  embed.setDescription("*I would be honored to join you!*")
  embed.addField('Invite Link', ("https://discordapp.com/oauth2/authorize?client_id=357303414322888715&permissions=8&scope=bot"))
  embed.addField('Lionbot Server', ("https://discord.gg/9TpNSF5"))
  message.channel.send( {embed} )
}
module.exports.help = {
    name: 'invite',
    args: 'None',
    notes: 'Gives you my invite links.',
    category: 'Basic'
}
