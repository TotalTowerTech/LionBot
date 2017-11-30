module.exports.run = (client, message, args, throwex) => {
  let nick = (`${args.join(" ")}`)
  if (nick == null){
    message.reply('I need a nickname to set!');
  }
  else{
  message.member.setNickname(`${args.join(" ")}`)
}
}
module.exports.help = {
    name: 'nick',
    args: '[nickname], [args]',
    notes: 'Sets your nickname',
    category: 'Moderation'
}
