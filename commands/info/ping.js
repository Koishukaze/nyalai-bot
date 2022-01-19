module.exports = {
    name: "ping",
    category: "info",
    description: "a command to check bot and api ping/latency",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply(`Pong! | Bot latency is **${Date.now() - message.createdTimestamp}ms.** API Latency is **${Math.round(client.ws.ping)}ms.**`);
    }
}