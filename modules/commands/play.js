module.exports.run = (client, message, args, throwex) => {
    const Discord = require('discord.js')
    const yt = require('ytdl-core');
    const opus = require("node-opus");
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
        const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel){
          return message.channel.sendMessage(":x: You must be in a voice channel first!");
        }
        voiceChannel.join()
        .then(connection => {
          let stream = yt(args.join(" "), {audioonly: true});
          yt.getInfo(args.join(" "), function(err, info) {
          const title = info.title
          console.log(`${message.author.username}, Queued the song '${title}.'`)
          message.channel.sendMessage(`Now playing \`${title}\``)
          })
          const dispatcher = connection.playStream(stream);
          dispatcher.on('end', () => {
             voiceChannel.leave();
           }).catch(e =>{
             throwex(e);
           });
        })
      }
catch (error){
  throwex(error)
}
}
module.exports.help = {
    name: 'play',
    args: '[song]',
    notes: 'Plays a song.',
    category: 'Fun'
}
