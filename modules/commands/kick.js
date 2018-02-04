module.exports.run = (client, message, args, throwex) => {
    const Discord = require('discord.js')
    let kick = ["Uh Oh! You got REJECTED!", "HmMmMmMmM", "Goodbye"]
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
    try {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(`**:no_entry_sign: ERROR:** Insufficient permissions.`);

        let person = message.guild.member(message.mentions.users.first());
        if (person == null) return message.reply("No one was mentioned. Can I kick you instead?");

        message.guild.member(person).kick(args.slice(1).join(" ")).then(member => {
            let embed = new Discord.RichEmbed()
            embed.setTitle(`**KICK**`)
            embed.setDescription(`${kick[Math.floor(Math.random () * kick.length)]}`)
            embed.addField('Member Kicked: ', (person))
            embed.addField('Reason: ', (`${args.join(" ")}`))
            message.delete()
            if (message.guild.id == "336487228228370432"){
               client.channels.get("398265731176988682").send({ embed });
            }
            else if (guild.id == "356165218625388554") {
              client.channels.get("409170359804231680").send({ embed });

            }
            else{
                  message.guild.channels.find("name", "logs").send({ embed });
                }
        })
    } catch (e) {
    throwex(e)
    }
}
module.exports.help = {
    name: 'kick',
    args: '[person], [args]',
    notes: 'Kicks a person from the server.',
    category: 'Moderation'
}
