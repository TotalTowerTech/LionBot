module.exports.run = (client, message, args) => {
  var behavior="popup";
  var font_tag="";
  var text=args.join(" ");
  var lctext=text.toLowerCase();
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
for(var i=0;i < lctext.length;i++){
      var thisChar=lctext.charAt(i);
      trans += phonArray[thisChar] + " ";}
     message.channel.send(trans)

}


module.exports.help = {
    name: "phonsay",
    args: "[args]",
    notes: `Repeats what you type, phonetically.`,
    category: 'Fun'
}
