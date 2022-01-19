module.exports = {
    name: "shutdown",
    category: "utility",
    permissions: [],
    devOnly: true,
    run: async ({ client, message, args }) => {
        message.reply("Shutting down...")
        setTimeout(function(){
            process.exit()
        }, 1)
    }
}