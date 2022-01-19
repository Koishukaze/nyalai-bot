module.exports = {
    name: "help",
    category: "info",
    description: "a command to show all commands",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply("```aList of available commands:\n \nInfo:\n    help: Sends this list of commands\n    ping: Measures bot/api ping\n \nUtility:\n    shutdown: Shuts down the bot (owner only)```");
    }
}