module.exports.run = (client, message, args, throwex) => {
    const Discord = require('discord.js');
  var behavior="popup";
  var font_tag="";
  var text=args.join(" ");
  var lctext=text.toLowerCase();
  var trans=" ";
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
  		var phonArray=new Array;
  		phonArray["a"]="Alpha";
  		phonArray["b"]="Bravo";
  		phonArray["c"]="Charlie";
  		phonArray["d"]="Delta";
  		phonArray["e"]="Echo";
  		phonArray["f"]="Foxtrot";
  		phonArray["g"]="Golf";
  		phonArray["h"]="Hotel";
  		phonArray["i"]="India";
  		phonArray["j"]="Juliet";
  		phonArray["k"]="Kilo";
  		phonArray["l"]="Lima";
  		phonArray["m"]="Mike";
  		phonArray["n"]="November";
  		phonArray["o"]="Oscar";
  		phonArray["p"]="Papa";
  		phonArray["q"]="Quebec";
  		phonArray["r"]="Romeo";
  		phonArray["s"]="Sierra";
  		phonArray["t"]="Tango";
  		phonArray["u"]="Uniform";
  		phonArray["v"]="Victor";
  		phonArray["w"]="Whiskey";
  		phonArray["x"]="X-ray";
  		phonArray["y"]="Yankee";
  		phonArray["z"]="Zulu";
  		phonArray["0"]="Zero";
  		phonArray["1"]="One";
  		phonArray["2"]="Two";
  		phonArray["3"]="Three";
  		phonArray["4"]="Four";
  		phonArray["5"]="Five";
  		phonArray["6"]="Six";
  		phonArray["7"]="Seven";
  		phonArray["8"]="Eight";
  		phonArray["9"]="Niner";
  		phonArray["/"]="[slash]";
  		phonArray["-"]="[Dash]";
  		phonArray["."]="[Dot]";
  		phonArray[" "]="[space]";

try{
  for(var i=0;i < lctext.length;i++){
      var thisChar=lctext.charAt(i);
      trans += phonArray[thisChar] + " ";}

let embed = new Discord.RichEmbed()
embed.setTitle("Phonetic Translation")
embed.setDescription("Beat THIS Ayana!")
embed.addField("Input:", `\`\`\`${args.join(" ")}\`\`\``)
embed.addField("Output:", `\`\`\`${(trans)}\`\`\``)
embed.setColor("ORANGE")
message.delete()
message.channel.send( {embed} )
}
catch (e) {
throwex(e)
}
}

module.exports.help = {
    name: "phonsay",
    args: "[args]",
    notes: `Repeats what you type, phonetically.`,
    category: 'Fun'
}
