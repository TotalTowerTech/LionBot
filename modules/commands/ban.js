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
    var banneResponse = ["Uh Oh. Moderators Sure aren't happy", "What did you do this time?", "Why do *I* have to do the dirty work?", "Banne! banne! banne!"]
    try {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`Who do you think you are? Running around banning people!`);

        let person = message.guild.member(message.mentions.users.first());
        if (person == null) return message.reply("No one was mentioned. Can I ban you instead?");

        message.guild.member(person).ban(args.slice(1).join(" ")).then(member => {
            let embed = new Discord.RichEmbed()
            embed.setColor("RED")
            embed.setTitle("Ban")
            embed.setDescription(banneResponse[Math.floor(Math.random() * banneResponse.length)])
            embed.addField('Member banned: ', (person))
            embed.addField('Reason: ', (`${args.join(" ")}`))
            message.delete()
            if (message.guild.id == "336487228228370432"){
               client.channels.get("398265731176988682").send({ embed });
            }
            else{
                  message.guild.channels.find("name", "logs").send({ embed });
                }        })
    } catch (e) {
    throwex(e)
    }
}
module.exports.help = {
    name: 'ban',
    args: '[person], [args]',
    notes: 'Bans a person from the server.',
    category: 'Moderation'
}
