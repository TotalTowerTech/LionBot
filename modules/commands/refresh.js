module.exports.run = (client, message, args) => {
    let command;
    if (message.author.id == 299314446428274689) {
        if (client.commands.has(args[0])) {
            command = args[0];
        }
        if (!command) return message.channel.send(`The module \`${args[0]}\` could not be found.`)
        try {
            delete require.cache[require.resolve(`./${command}`)];
            let cmd = require(`./${command}`);
            client.commands.delete(command);
            client.commands.set(command, cmd);
            message.reply(`:robot: **The ${command} command has been refreshed! It's been reloaded into my RAM.**`)
        } catch (e) {
            message.channel.send('An error has occured while refreshing this command. The error has been logged to the console.');
            console.log(e);
        }
    }

}
module.exports.help = {
    name: "refresh",
    args: "[./filename.js]",
    notes: "Reloads a specific JavaScript Module into Dedicated WAM",
    category: 'Owner Only'
}
