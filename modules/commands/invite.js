module.exports.run = (client, message, throwex) => {
	const Discord = require('discord.js');
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
  embed.setTitle("Join the Lionbot family")
  embed.setDescription("*I would be honored to join you!*")
  embed.addField('Invite Link', ("https://discordapp.com/oauth2/authorize?client_id=357303414322888715&permissions=8&scope=bot"))
  embed.addField('Lionbot Server', ("https://discord.gg/9TpNSF5"))
  message.channel.send( {embed} )
}
catch (e){
	throwex(e)
}
}
module.exports.help = {
    name: 'invite',
    args: 'None',
    notes: 'Gives you my invite links.',
    category: 'Basic'
}
