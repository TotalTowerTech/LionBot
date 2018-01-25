module.exports.run = (client, message) => {
	const Discord = require('discord.js');
  let args = message.content.split(" ").slice(1);

    if(message.author.id == 299314446428274689 || 228271067821506560){
			const code = args.join(" ");
      let evaled = eval(code);
			try{
      	if (typeof evaled !== "string"){



        evaled = require("util").inspect(evaled)}
				let embed = new Discord.RichEmbed()
				embed.setTitle("Evaluation")
				embed.setDescription("Here you go! c:")
				embed.addField("Input:", `\`\`\`js\n${code}\n\`\`\``)
				embed.addField("Output:", `\`\`\`js\n${(evaled)}\n\`\`\``)
				embed.setColor("BLACK")
				embed.setTimestamp()
			}
			catch(err) {
			console.error(err)
			}
      message.channel.send( {embed} );
}
    else {
  		message.reply("No! I will not run your filthy code!")
    }



}

module.exports.help = {
    name: "eval",
    args: "[code]",
    notes: "Executes JavaScript code.",
    category: 'Owner Only'
}
