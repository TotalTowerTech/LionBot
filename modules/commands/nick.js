module.exports.run = (client, message, args, throwex) => {
  let nick == ${args.join(" ")}
  if (nick.length >= 32){
    message.reply("That nickname is too long! 32 Charecters or less please!");
  }
  else if (nick.length = 0){
  message.reply("Nickname Cleared!");
  }
  else {
    message.member.setNickname(`${args.join(" ")}`)
    message.reply(`Ok! I set your nickname to "${args.join(" ")}". `);
  }
}
module.exports.help = {
    name: 'nick',
    args: '[nickname], [args]',
    notes: 'Sets your nickname. Do the command without arguments to clear your nickname.',
    category: 'Moderation'
}
