/****************************************
 *
 *   LionBot: (Basically Half-Baked) Moderation bot, with a few fun commands.
 *   written by ServerLion#1789
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the MIT License.
 *
 *  FloppyDiskDrive wrote the handler and helped me fix my derps. (Thanks again! c:)
 *  Jtsshieh wrote the help command
 *
 *
 * *************************************/

var ver = "1.0.4";
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const config = require("./config.json")
var prefix = 'lion.'
var vicCount = 0;
var sameMsg = {};
var banneResponse = ["Uh Oh. Moderators Sure aren't happy", "What did you do this time?", "Why do *I* have to do the dirty work?", "Banne! banne! banne!"]
var token = config.token

client.login(process.env.TOKEN)

client.on('ready', () => {
    console.log("[i] LionBot " + ver + " is now ready to go!");
    function gameRandomizer() {
        var presence = ["Wii Sports", `${prefix}help | LionBot v${ver}`, "stuff", "with PrecipitationJS", `with ${client.guilds.size} guilds`];
        var gameSetter = presence[Math.floor(Math.random() * presence.length)];
        client.user.setGame(gameSetter);
    }
    var gameChooser = setInterval(gameRandomizer, 30000);
});

var modCommand;

function hasPermissions(perm) {
    if (message.member.hasPermission(perm)) {
        return true;
    } else {
        return false;
    }
}

fs.readdir(`./modules/commands/`, (err, files) => {
    if (err) console.error(err);

    let modules = files.filter(f => f.split(".").pop() === "js");
    if (modules.length <= 0) {
        console.log("No public commands found. Running with no public commands loaded.");
        return;
    }

    console.log(`Now loading ${modules.length} public commands.`)
    modules.forEach((f, i) => {
        let props = require(`./modules/commands/${f}`);
        try {
            client.commands.set(props.help.name, props);
        } catch (err) {
            console.log('One or more of your public commands caused an error. Check your public commands and try again. \n=> ' + err);
            process.exit(1)
        }
    })

    console.log(`Finshed loading all ${modules.length} commands.`)
})


client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;



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



    let array = message.content.split(" ");
    let command = array[0];
    let args = array.slice(1);

    if (!command.startsWith(prefix)) return;

    let cmd = client.commands.get(command.slice(prefix.length));
    if (cmd) {
        cmd.run(client, message, args, throwex);
    }

});
client.on("guildCreate", (guild) => {

    console.log(client.user.username + " was invited to and joined " + guild.name);
    guild.channels.find(c => c.name == 'general').send("Thanks for choosing LionBot! Please run lion.help to get started. To take advantage of current and future moderation commands please create a channel called '#logs'. If your guild has over 200 members DM ServerLion#1789 and we can make an exception to that. Thanks again! -ServerLion ");
});

client.on("guildDelete", (guild) => {

    console.log(client.user.username + " has left " + guild.name);
});

client.on("guildBanAdd", (guild, user, throwex) => {
  let embed = new Discord.RichEmbed()

  embed.setColor("RED")
  embed.setTitle("Ban")
  embed.setDescription(banneResponse[Math.floor(Math.random() * banneResponse.length)])
  embed.addField('Member banned: ', (user))
  if (guild.id == "336487228228370432"){
     client.channels.get("398265731176988682").send({ embed });
  }
  else if (guild.id == "264445053596991498") {
    client.channels.get("265156361791209475").send({ embed });

  }
  else{
          guild.channels.find(c => c.name == 'logs').send({ embed });
}


});

client.on("guildBanRemove", (guild, user, throwex) => {
  let embed = new Discord.RichEmbed()

  embed.setColor("GREEN")
  embed.setTitle("Pardon")
  embed.setDescription(banneResponse[Math.floor(Math.random() * banneResponse.length)])
  embed.addField('Member unbanned:', (user))
  if (guild.id == "336487228228370432"){
     client.channels.get("398265731176988682").send({ embed });
  }
  else if (guild.id == "264445053596991498") {
    client.channels.get("265156361791209475").send({ embed });

  }
  else{
          guild.channels.find(c => c.name == 'logs').send({ embed });

}
});

client.on("messageUpdate", (oldMessage, newMessage, guild) => {

  if (oldMessage.author.bot) return;
try{
    let embed = new Discord.RichEmbed()
  embed.setColor("ORANGE");
  embed.setTitle(`:pencil2: **Message Edit**`);
  embed.setDescription(`Message by ${oldMessage.author.username} was edited in ${oldMessage.channel}`)
  embed.addField('Old Message', '```'+(oldMessage.content)+'```');
  embed.addField('New Message', '```'+(newMessage.content)+'```');
  embed.setFooter(`Edited Message by ${oldMessage.author.username} on ${new Date()}`, oldMessage.author.avatarURL)
  if (newMessage.guild.id == "336487228228370432") {
     client.channels.get("398333160452128778").send({ embed });
  }
  else if (newMessage.guild.id == "264445053596991498") {
    client.channels.get("265156361791209475").send({ embed });

  }
  else {
          newMessage.guild.channels.find(c => c.name == 'logs').send({ embed });
}
}
catch (error){
  console.log(error)
}
});

client.on("messageDelete", (Message, throwex) => {
  if (Message.author.bot) return;

try{
  let embed = new Discord.RichEmbed()
  .setColor("RED")
  .setTitle(":wastebasket: **Message Delete**")
  .setDescription(`Message by ${Message.author.username} was deleted in ${Message.channel}`)
  .addField(`Deleted Message`, '```'+(Message.content)+'```')
  .setFooter(`Deleted Message by ${Message.author.username} on ${new Date()}`, Message.author.avatarURL)
  if (Message.guild.id == "336487228228370432") {
     client.channels.get("398333160452128778").send({ embed });
  }
  else if (Message.guild.id == "264445053596991498") {
    client.channels.get("265156361791209475").send({ embed });

  }
  else{
          Message.guild.channels.find(c => c.name == 'logs').send({ embed });

}
}
catch (error){
  console.log(error)
}
});

client.on("guildMemberAdd", (member, throwex, user) => {
try{
  let embed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setTitle("Member Join")
  .setDescription(`Welcome to the server!`)
  .addField(`New Member Name`, (member.user.tag))
  .addField(`Account Created On`, (member.user.createdAt))
  .addField(`Member Joined On`, (member.joinedAt))
  .setThumbnail(member.user.avatarURL)

  if (member.guild.id == "336487228228370432") {
     client.channels.get("398265769567191051").send({ embed });
  }
  else if (member.guild.id == "264445053596991498") {
    client.channels.get("265156361791209475").send({ embed });

  }
  else{
          member.guild.channels.find(c => c.name == 'logs').send({ embed });

}
}
catch (error){
  console.log(error)
}
});



process.on('unhandledRejection', function (err, p) {
    console.log("[X] " + err.stack);
});
