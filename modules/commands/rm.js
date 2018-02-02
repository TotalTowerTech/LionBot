module.exports.run = async (client, message, args) => {
  const Discord = require('discord.js')
    var number = parseInt(args.join(" "));
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

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`You can't silence the people!`);
try {
    if (isNaN(number)) {
        message.channel.send("You want me to delete... air?");
    }
    else if (number < 0) {
        message.channel.send("I can't *add* messages! Try lion.embedsay for that.");
    }
    else if (number > 99) {
        message.channel.send("I can only count to 99 right now. Nothing more please!");
    }
    else if (number == 0) {
        message.channel.send("I cannot delete 0 messages. ");
    }
    else {
        message.channel.bulkDelete(number).then(() => {
            message.channel.send(`:white_check_mark: Deleted ${number} messages!`);
        });
    }
  }
  catch (error) {
    throwex(error)
  }
}
module.exports.help = {
    name: "rm",
    args: "[Messages to Delete]",
    notes: "Allows you to delete a bulk amount of messages.",
    category: 'Moderation'
}
