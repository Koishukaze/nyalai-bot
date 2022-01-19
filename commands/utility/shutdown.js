module.exports = {
    name: "shutdown",
    category: "utility",
    description: "a command to remotely shut off bot",
    permissions: [],
    devOnly: true,
    run: async ({ client, message, args }) => {
        message.reply("Shutting down...")
        setTimeout(function(){
            process.exit()
        }, 1)
    }
}