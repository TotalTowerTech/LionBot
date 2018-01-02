module.exports.run = (client, message, args, throwex) => {
  message.member.setNickname(`${args.join(" ")}`)
  message.reply(`Ok! I set your nickname to "${args.join(" ")}". Please note that this will be blank if you cleared your nickname.`);
}
module.exports.help = {
    name: 'nick',
    args: '[nickname], [args]',
    notes: 'Sets your nickname. Do the command without arguments to clear your nickname.',
    category: 'Moderation'
}
