
module.exports.run = (client, message, args) => {
    var reply = ["Yes", "No", "IDK I'm just a bot", "Ask PrecipitationJS"]
    message.reply(`${reply[Math.floor(Math.random () * reply.length)]}`)
}

module.exports.help = {
    name: "ask",
    args: "[question]",
    notes: "Hello Discord, Ask me anything!",
    category: 'Fun'
}
