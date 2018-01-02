module.exports.run = (client, message, args, throwex) => {
  let loldoesanyonereadthese = args.join(" ")
  if loldoesanyonereadthese = "" {
  message.member.setNickname(loldoesanyonereadthese)
  message.reply ("Ok! I cleared that nickname for you!")
  }
  else {
  message.member.setNickname(loldoesanyonereadthese)
  message.reply(`Ok! I set your nickname to ${args.join(" ")}`)
}
}
module.exports.help = {
    name: 'nick',
    args: '[nickname], [args]',
    notes: 'Sets your nickname. Do the command without arguments to clear your nickname.',
    category: 'Moderation'
}
